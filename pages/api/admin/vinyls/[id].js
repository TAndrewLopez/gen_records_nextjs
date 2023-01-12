import { isAdmin, requireToken } from "../../../../customMiddleware";
import { Artist, Track, Vinyl } from "../../../../server";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { name, price, qty, releaseDate, label } = req.body;
      const vinyl = await Vinyl.findByPk(req.query.id);
      await vinyl.update({
        name,
        price,
        qty,
        releaseDate,
        label,
      });
      const updatedVinyl = await Vinyl.findByPk(req.query.id, {
        include: [Artist, Track],
      });
    } catch (error) {}
  }
};

export default requireToken(isAdmin(handler));
