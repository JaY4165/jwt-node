import User from "../models/user.model";
import { loginDataType, registrationDataType } from "../types/types";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import * as jwtUtils from "../utils/jwt.utils";

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const registrationData: registrationDataType = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    };

    console.log(registrationData);

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      throw new Error("User already exists");
    }

    const createNewUser = await User.create({
      name: registrationData.name,
      email: registrationData.email,
      password: registrationData.password,
    });

    if (createNewUser) {
      const token = jwtUtils.generateToken({
        userId: createNewUser._id,
        name: createNewUser.name,
      });
      res.status(201).json({ message: "User created", token });
    }
  } catch (err: any) {
    res.status(401).json({ error: "user creation error" });
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const loginData: loginDataType = {
      email: req.body.email,
      password: req.body.password,
    };

    console.log(loginData);

    const userFound = await User.findOne({
      email: loginData.email,
    });

    if (userFound) {
      const passwordMatched = await bcrypt.compare(
        loginData.password,
        userFound?.password as string
      );

      if (passwordMatched) {
        const token = jwtUtils.generateToken({
          userId: userFound._id,
          name: userFound.name,
        });
        res.status(201).json({ message: "User loggedIn", token });
      } else {
        throw new Error("Cannot login User");
      }
    }
  } catch (err: any) {
    res.status(400).json({ error: "cannot login user" });
  }
};
