import { User } from "../../../server";
import { requireToken, isAdmin } from "../../../customMiddleware";

const handler = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "username",
        "email",
        "isAdmin",
      ],
    });
    users.sort((a, b) => a.id - b.id);
    return res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default requireToken(isAdmin(handler));
