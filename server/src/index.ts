import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { UserModel } from "./model/userModel";
import authMiddleware from "./middlewares/authMiddleware";

const PORT = 3000;

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error in connecting mongodb", error);

    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" }));

// Endpoint for signin task
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Input validation
  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required." });
  }

  try {
    // Checking if user with the given email exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    // Verify the password
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid password." });
    }

    // Generate JWT token
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save();

    res.status(200).json({
      message: "Login successful.",
      userId: user._id,
      accessToken,
      refreshToken,
    });
  } catch (e) {
    console.error("Error during login:", e);
    res.status(500).json({ message: "An error occurred during login." });
  }
});

// Endpoint for signup task
app.post("/signup", async (req: Request, res: Response) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // Input validation
  if (!email || !password || !name) {
    res.status(400).json({ message: "Email, password, Name are required." });
  }

  try {
    // checking if the user already exist
    const user = await UserModel.findOne({ email });

    if (user) {
      res.status(409).json({ message: "User with this email already exists." });
      return;
    }

    const newUser = new UserModel({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(200).json({ message: "User signed up successfully." });
  } catch (e) {
    console.error("Error duing signup", e);
    res.status(500).json({ message: "An error occurred during signup." });
  }
});

// Endpoint for adding a new schedule
app.post("/add-schedule", async (req, res) => {
  const apiSchedule = req.body.apiSchedule;
  const userId = req.body.userId;

  if (!apiSchedule)
    res.status(400).json({ message: "apiSchedule parameter is not given" });

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User is not found" });
      return;
    }

    user.scheduledAPIs.push(apiSchedule);

    const savedAPI = await user.save();

    res.status(200).json({
      message: "API schedule is added successfully",
      id: savedAPI._id,
    });
  } catch (e) {
    console.error("Error in adding the schedule", e);
    res.status(500).json({ message: "Error in adding a new schedule" });
  }
});

// Endpoint for deleting a schedule
app.post("/delete-schedule", async (req, res) => {
  const userId = req.body.userId;
  const scheduleId = req.body.id;

  if (!scheduleId || !userId)
    res
      .status(400)
      .json({ message: "scheduleId or userId parameter is not given" });

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User is not found" });
      return;
    }

    user.scheduledAPIs = user.scheduledAPIs.filter(
      (api) => api._id != scheduleId
    );

    await user.save();

    res.status(200).json({
      message: "Scheduled API is deleted successfully",
    });
  } catch (e) {
    console.error("Error in deleting the schedule", e);
    res.status(500).json({ message: "Error in deleting the schedule" });
  }
});

// Endpoint for updating a schedule
app.post("/update-schedule", async (req, res) => {
  const userId = req.body.userId;
  const scheduleId = req.body.id;
  const newEndpoint = req.body.endpoint;

  if (!scheduleId || !userId || !newEndpoint) {
    res.status(400).json({
      message: "scheduleId or userId or endpoint parameter is not given",
    });
    return;
  }
  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User is not found" });
      return;
    }

    const api = user.scheduledAPIs.filter((api) => api._id == scheduleId);

    api[0].endpoint = newEndpoint;

    await user.save();

    res.status(200).json({
      message: "Scheduled API is updated successfully",
    });
  } catch (e) {
    console.error("Error in updating the schedule", e);
    res.status(500).json({ message: "Error in updating the schedule" });
  }
});

// Endpoint for getting all the schedules
app.get("/schedules", async (req, res) => {
  const userId = req.query.id;

  if (!userId) {
    res.status(400).json({ message: "Id is not given" });
  }

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User is not found" });
      return;
    }

    res.status(200).json({
      message: "Fetched all the API schedules successfully",
      apiSchedules: user.scheduledAPIs,
    });
  } catch (e) {
    console.error("Error in fetching all the API schedules");

    res
      .status(500)
      .json({ message: "Error in fetching all the API schedules" });
  }
});

app.listen(PORT, () => {
  console.log("The server is running on port " + PORT);
});
