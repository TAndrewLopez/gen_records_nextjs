import { Artist, LineItem, Order, Track, Vinyl } from "../../../server";

export default async function handler(req, res) {
  try {
    const vinyls = await Vinyl.findAll({
      include: Artist,
    });
    vinyls.sort((a, b) => a.id - b.id);
    return res.json({ vinyls });
  } catch (error) {
    res.status(500).send(error);
  }
}
