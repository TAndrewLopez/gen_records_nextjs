import { User } from "../server/models";

const requireToken = (handler) => {
  return async (req, res) => {
    let token;

    if (req.headers.authorization) {
      token = req.headers.authorization;
    }

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Please log in to get access." });
    }

    try {
      const currentUser = await User.findByToken(token);
      if (!currentUser) {
        return res.status(401).json({
          success: false,
          message: "The user belonging to this token no longer exist.",
        });
      }
      req.user = currentUser;
      return handler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "Please log in to get access." });
    }
  };
};

export default requireToken;
