import { Artist, Track, Vinyl } from "../../../server";

const handler = async (req, res) => {
  try {
    const vinyl = await Vinyl.findByPk(req.query.vinylId, {
      include: [Artist, Track],
    });
    res.json({ success: true, vinyl });
  } catch (error) {
    console.log(error);
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
};

export default handler;
