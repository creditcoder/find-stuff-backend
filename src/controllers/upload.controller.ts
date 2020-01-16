import { Request, Response } from "express";
import User from "../models/User";
import { signupValidation, signinValidation } from "../libs/joi";
import jwt from "jsonwebtoken";

import multer from "multer";
const upload = multer({ dest: "uploads/" });

class UploadController {
  public async photo(req: Request, res: Response) {}
}

export default new UploadController();
