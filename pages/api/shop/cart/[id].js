import { Order, LineItem, Vinyl, Artist } from "../../../../server";
import { requireToken } from "../../../../customMiddleware";

//API/SHOP/CART/[ID]
const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const userOrders = await Order.findAll({
        where: { userId: req.user.id },
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
        message: error.message,
      });
    }
  }

  if (req.method === "PUT") {
    try {
      const cart = await Order.findOne({
        where: {
          complete: false,
          userId: req.user.id,
        },
      });

      const lineItem = await LineItem.create({
        orderId: cart.id,
        vinylId: req.query.id,
      });

      const itemWithContents = await LineItem.findByPk(lineItem.id, {
        attributes: ["id", "qty"],
        include: {
          model: Vinyl,
          attributes: ["id", "name", "stock", "price", "img"],
          include: {
            model: Artist,
            attributes: ["id", "name"],
          },
        },
      });

      res.status(200).json({ success: true, itemWithContents });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  if (req.method === "DELETE") {
    try {
      await LineItem.destroy({
        where: { id: req.query.id },
      });
      res.json({ success: true, lineItem: Number(req.query.id) });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

export default requireToken(handler);
