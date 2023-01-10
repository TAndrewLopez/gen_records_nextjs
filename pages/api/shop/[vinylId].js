import { Artist, Track, Vinyl } from "@/server";

const handler = async (req, res) => {
  try {
    const vinyl = await Vinyl.findByPk(req.query.vinylId, {
      include: [Artist, Track],
    });
    res.json({ success: true, vinyl });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `An error has occurred. Unable to fetch vinyl id# ${req.query.vinylId}`,
    });
  }
};

export default handler;
