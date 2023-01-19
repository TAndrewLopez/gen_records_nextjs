import { User } from "../../../server";
import { requireToken } from "../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const user = await User.findByPk(req.user.id);
      const { firstName, lastName, username, email, img } = req.body;

      await user.update({
        firstName: firstName || req.user.firstName,
        lastName: lastName || req.user.lastName,
        username: username || req.user.username,
        email: email || req.user.email,
        img: img || req.user.img,
      });

      res.status(200).json({ success: true, user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
};
export default requireToken(handler);
