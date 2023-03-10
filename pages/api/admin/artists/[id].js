import { Artist, Vinyl } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const artist = await Artist.findByPk(req.query.id);
      await artist.update(req.body);
      const updatedArtist = await Artist.findByPk(req.query.id, {
        include: Vinyl,
      });
      res.status(200).json({ success: true, updatedArtist });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const artist = await Artist.findByPk(req.query.id);

      if (!artist) {
        return res.status(500).json({
          success: false,
          message: "Track doesn't exist in database.",
        });
      }

      await artist.destroy();
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
