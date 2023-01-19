import { Order, User } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const {} = req.body;
      const user = await User.findByPk(req.query.id);
      await user.update({});

      const updatedUser = await User.findByPk(req.query.id, { include: Order });
      res.status(200).json({ success: true, updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const user = await User.findByPk(req.query.id);

      if (!user) {
        return res.status(500).json({
          success: false,
          message: "User doesn't exist in database.",
        });
      }

      await user.destroy();
      res.status(200).json({ success: true, user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
