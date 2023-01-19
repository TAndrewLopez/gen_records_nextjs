import { Order } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const {} = req.body;
      const order = await Order.findByPk(req.query.id);
      await order.update({});

      const updatedOrder = await Order.findByPk(req.query.id, {});
      res.status(200).json({ success: true, updatedOrder });
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
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
