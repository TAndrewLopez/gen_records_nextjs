import { Order, LineItem, Vinyl, Artist } from "@/server";
import { requireToken } from "@/customMiddleware";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const userOrders = await Order.findAll({
        where: { userId: req.query.id },
        include: {
          model: LineItem,
          attributes: ["id", "qty"],
          include: {
            model: Vinyl,
            attributes: ["id", "name", "stock", "price", "img"],
            include: {
              model: Artist,
              attributes: ["id", "name"],
            },
          },
        },
      });
      userOrders.sort((a, b) => a.id - b.id);
      res.status(200).json({ success: true, userOrders });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `An error has occurred. Unable to fetch user order id# ${req.query.id}.`,
        error,
      });
    }
  }

  if (req.method === "PUT") {
    res.status(200).json({ success: true, message: "success" });
  }
};

export default requireToken(handler);
