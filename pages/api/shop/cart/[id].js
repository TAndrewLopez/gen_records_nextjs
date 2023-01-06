import { Order, LineItem, Vinyl, Artist } from "../../../../server/models";
import { requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  try {
    const userOrders = await Order.findAll({
      where: { userId: req.query.id },
      // include: {
      //   model: LineItem,
      //   attributes: ["id", "qty"],
      //   include: {
      //     model: Vinyl,
      //     attributes: ["id", "name", "stock", "price", "img"],
      //     include: {
      //       model: Artist,
      //       attributes: ["id", "name"],
      //     },
      //   },
      // },
    });
    userOrders.sort((a, b) => a.id - b.id);
    res.status(200).json({ userOrders });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default requireToken(handler);
