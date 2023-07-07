import { ObjectId } from "mongoose";

export interface userType {
  name: string;
  email: string;
  password: string;
}

export interface createdUserInfo {
  name: string;
  email: string;
  password: string;
  _id: any;
  __v?: number;
}

export interface registrationDataType {
  name: string;
  email: string;
  password: string;
}

export interface loginDataType {
  email: string;
  password: string;
}
