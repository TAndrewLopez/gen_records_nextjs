import { Vinyl } from "../../../../server";
import { requireToken, isAdmin } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const vinyl = await Vinyl.create(req.body);
      res.status(200).json({ success: true, vinyl });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
