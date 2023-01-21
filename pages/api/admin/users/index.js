import { User } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(200).json({ success: true, user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.messasge });
    }
  }
};

export default requireToken(isAdmin(handler));
