// import { NextFunction, Request, Response } from "express";
// import jwt, { decode } from "jsonwebtoken";

// export const authMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token: string | undefined = req
//       .header("Authorization")
//       ?.replace("Bearer", "");

//     if (!token) {
//       res.status(401).json({ message: "Unauthorized" });
//     }

//     if (token) {
//       const decodedToken = jwt.verify(
//         token,
//         (process.env.JWT_SECRET_KEY as string) || ""
//         // req.user = decodedToken;
//       );
//     }

//     next();
//   } catch (err: any) {
//     res.status(401).json({ message: "Authentication Failed" });
//   }
// };
