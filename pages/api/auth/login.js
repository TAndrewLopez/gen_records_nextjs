import { User } from "../../../server";
import cookie from "cookie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      const authorization = await User.authenticate({ username, password });

      if (!authorization) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials." });
      }

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

      res.status(202).json({ success: true, authorization });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default handler;
