import { requireToken } from "../../../customMiddleware";
import { LineItem, Order, Vinyl } from "../../../server";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const order = await Order.findOne({
        where: {
          userId: req.user.id,
          complete: false,
        },
        include: LineItem,
      });

      if (!order.lineItems.length) {
        return res
          .status(401)
          .json({ success: false, message: "Add items to cart for checkout." });
      }

      order.lineItems.forEach(async (item) => {
        const product = await Vinyl.findByPk(item.vinylId);
        await product.update({ stock: product.stock - item.qty });
      });

      const prevOrder = await order.update({ complete: true });
      const newOrder = await Order.create({
        userId: req.user.id,
      });

      const orderWithContents = await Order.findByPk(newOrder.id, {
        include: {
          model: LineItem,
        },
      });

      res.status(200).json({
        success: true,
        order: orderWithContents,
        prevOrder,
      });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default requireToken(handler);
