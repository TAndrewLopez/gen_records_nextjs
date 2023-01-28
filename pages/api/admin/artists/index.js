import { Artist } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const artist = await Artist.create(req.body);
      res.status(200).json({ success: true, artist });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
