import { requireToken } from "../../../customMiddleware";

const handler = async (req, res) => {
  try {
    const { id, firstName, lastName, username, email, isAdmin, img } = req.user;
    res
      .status(200)
      .json({ id, firstName, lastName, username, email, isAdmin, img });
  } catch (error) {
    res.status(500).json({ error: "Failed to authenticate user." });
  }
};

export default requireToken(handler);
