import { Artist, Track, Vinyl } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      console.log(req.body, req.query.id);
      const vinyl = await Vinyl.findByPk(req.query.id);
      await vinyl.update(req.body);
      const updatedVinyl = await Vinyl.findByPk(req.query.id, {
        include: [Artist, Track],
      });
      res.status(200).json({ success: true, updatedVinyl });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const vinyl = await Vinyl.findByPk(req.query.id);
      if (!vinyl) {
        return res.status(500).json({
          success: false,
          message: "Vinyl doesn't exist in database.",
        });
      }
      await vinyl.destroy();
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
