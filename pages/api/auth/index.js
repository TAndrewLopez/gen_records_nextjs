import { User } from "../../../server/models";
import { requireToken } from "../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const user = await User.findByPk(req.user.id);
      const { firstName, lastName, username, email, password, img } = req.body;

      await user.update({
        firstName: firstName || req.user.firstName,
        lastName: lastName || req.user.lastName,
        username: username || req.user.username,
        email: email || req.user.email,
        password: password || req.user.password,
        img: img || req.user.img,
      });

      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error has occurred. Unable to update user.",
      });
    }
  }
};

export default requireToken(handler);
