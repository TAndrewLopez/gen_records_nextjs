import { requireToken } from "../../../customMiddleware";

const handler = async (req, res) => {
  try {
    const { id, firstName, lastName, username, email, isAdmin, img } = req.user;
    res.status(200).json({
      success: true,
      id,
      firstName,
      lastName,
      username,
      email,
      isAdmin,
      img,
    });
  } catch (error) {
    console.log(error);
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
};

export default requireToken(handler);
