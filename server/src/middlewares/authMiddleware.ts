import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../model/userModel";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.body.accessToken;

  if (!accessToken) {
    res.status(401).json({ message: "unauthorized access" });
  }

  const decodedToken = jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET as string
  ) as JwtPayload;

  const user = await UserModel.findById(decodedToken?._id);

  if (!user) {
    res.status(401).json({ message: "Invalid access token" });
  }

  next();
};

export default authMiddleware;
