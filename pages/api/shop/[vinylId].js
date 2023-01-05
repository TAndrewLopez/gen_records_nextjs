import { Artist, Track, Vinyl } from "../../../server";

export default async function handler(req, res) {
  try {
    const vinyl = await Vinyl.findByPk(req.query.vinylId, {
      include: [Artist, Track],
    });
    res.json({ vinyl });
  } catch (error) {
    res.status(500).send(error);
  }
}
