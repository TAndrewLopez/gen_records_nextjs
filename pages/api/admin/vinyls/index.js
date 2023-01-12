import { requireToken, isAdmin } from "../../../../customMiddleware";
import { Vinyl } from "../../../../server";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, price, stock, artistId } = req.body;
      const randomArtistId = Math.floor(Math.random() * (100 - 1) + 1);
      const product = await Vinyl.create({
        name,
        price,
        stock,
        releaseDate,
        label,
        totalTrack: 1,
        artistId: artistId || randomArtistId,
      });
    } catch (error) {}
  }
};

export default requireToken(isAdmin(handler));
