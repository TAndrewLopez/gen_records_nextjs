import { Artist, Vinyl } from "../../../server";

const handler = async (req, res) => {
  try {
    const vinyls = await Vinyl.findAll({
      include: Artist,
    });

    vinyls.sort((a, b) => a.id - b.id);

    return res.json({ success: true, vinyls });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error has occurred. Unable to fetch vinyls from shop.",
    });
  }
};

export default handler;
