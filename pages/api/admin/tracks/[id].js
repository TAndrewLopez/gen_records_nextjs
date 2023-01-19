import { Track, Vinyl } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const {} = req.body;
      const track = await Track.findByPk(req.query.id);
      await track.update({});

      const updatedTrack = await Track.findByPk(req.query.id, {
        include: Vinyl,
      });
      res.status(200).json({ success: true, updatedTrack });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const track = await Track.findByPk(req.query.id);

      if (!track) {
        return res.status(500).json({
          success: false,
          message: "Track doesn't exist in database.",
        });
      }

      await track.destroy();
      res.status(200).json({ success: true, track });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
