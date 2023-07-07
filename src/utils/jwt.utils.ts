import jwt from "jsonwebtoken";

export const generateToken = (payload: any) => {
  return jwt.sign(payload, (process.env.JWT_SECRET_KEY as string) || "", {
    expiresIn: "1h",
  });
};
