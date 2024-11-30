"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = require("./model/userModel");
const PORT = 3000;
dotenv_1.default.config();
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield mongoose_1.default.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log("error in connecting mongodb", error);
        process.exit(1);
    }
});
connectDB();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
// Endpoint for signin task
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    // Input validation
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required." });
    }
    try {
        // Checking if user with the given email exists
        const user = yield userModel_1.UserModel.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found." });
            return;
        }
        // Verify the password
        const isPasswordValid = bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid password." });
        }
        // Generate JWT token
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        yield user.save();
        res.status(200).json({
            message: "Login successful.",
            userId: user._id,
            accessToken,
            refreshToken,
        });
    }
    catch (e) {
        console.error("Error during login:", e);
        res.status(500).json({ message: "An error occurred during login." });
    }
}));
// Endpoint for signup task
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // Input validation
    if (!email || !password || !name) {
        res.status(400).json({ message: "Email, password, Name are required." });
    }
    try {
        // checking if the user already exist
        const user = yield userModel_1.UserModel.findOne({ email });
        if (user) {
            res.status(409).json({ message: "User with this email already exists." });
            return;
        }
        const newUser = new userModel_1.UserModel({
            name,
            email,
            password,
        });
        yield newUser.save();
        res.status(200).json({ message: "User signed up successfully." });
    }
    catch (e) {
        console.error("Error duing signup", e);
        res.status(500).json({ message: "An error occurred during signup." });
    }
}));
// Endpoint for adding a new schedule
app.post("/add-schedule", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apiSchedule = req.body.apiSchedule;
    const userId = req.body.userId;
    if (!apiSchedule)
        res.status(400).json({ message: "apiSchedule parameter is not given" });
    try {
        const user = yield userModel_1.UserModel.findById(userId);
        if (!user) {
            res.status(404).json({ message: "User is not found" });
            return;
        }
        user.scheduledAPIs.push(apiSchedule);
        yield user.save();
        res.status(200).json({ message: "API schedule is added successfully" });
    }
    catch (e) {
        console.error("Error in adding the schedule", e);
        res.status(500).json({ message: "Error in adding a new schedule" });
    }
}));
// Endpoint for getting all the schedules
app.get("/schedules", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.id;
    if (!userId) {
        res.status(400).json({ message: "Id is not given" });
    }
    try {
        const user = yield userModel_1.UserModel.findById(userId);
        if (!user) {
            res.status(404).json({ message: "User is not found" });
            return;
        }
        res.status(200).json({
            message: "Fetched all the API schedules successfully",
            apiSchedules: user.scheduledAPIs,
        });
    }
    catch (e) {
        console.error("Error in fetching all the API schedules");
        res
            .status(500)
            .json({ message: "Error in fetching all the API schedules" });
    }
}));
app.listen(PORT, () => {
    console.log("The server is running on port " + PORT);
});
