import { User } from "../../../server";
import cookie from "cookie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { username, password, email, firstName, lastName } = req.body;
      const user = await User.create({
        username,
        password,
        email,
        firstName,
        lastName,
      });

      if (!user) {
        return res.status(409).json({
          success: false,
          message: "An error has occurred. Unable to create user.",
        });
      }

      const authorization = await user.generateToken();

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("genRecords", authorization, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        })
      );

      res.status(201).json({ success: true, authorization });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};
export default handler;
