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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../model/userModel");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = req.body.accessToken;
    if (!accessToken) {
        res.status(401).json({ message: "unauthorized access" });
    }
    const decodedToken = jsonwebtoken_1.default.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const user = yield userModel_1.UserModel.findById(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken._id);
    if (!user) {
        res.status(401).json({ message: "Invalid access token" });
    }
    next();
});
exports.default = authMiddleware;
