import { User } from "../../../server/models";
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
    return res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong fetching user attributes.",
    });
  }
};

export default requireToken(isAdmin(handler));
