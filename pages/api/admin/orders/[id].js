import { Order, User } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const order = await Order.findByPk(req.query.id);
      await order.update(req.body);
      if (req.body.complete === "true") {
        await Order.create({
          userId: req.body.userId,
        });
      }
      const orders = await Order.findAll({
        include: User,
      });
      orders.sort((a, b) => a.id - b.id);
      res.status(200).json({ success: true, orders });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const order = await Order.findByPk(req.query.id);

      if (!order) {
        return res.status(500).json({
          success: false,
          message: "Track doesn't exist in database.",
        });
      }

      await order.destroy();
      res.status(200).json({ success: true, order });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
