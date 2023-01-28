import { Vinyl, Order, LineItem } from "../../../server";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { cart } = req.body;

      const guestOrder = await Order.create({ userId: null });

      cart.forEach(async (item) => {
        const product = await Vinyl.findByPk(item.vinyl.id);
        await LineItem.create({
          orderId: guestOrder.id,
          vinylId: product.id,
        });
        await product.update({ stock: product.stock - item.qty });
      });

      await guestOrder.update({ complete: true });

      res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default handler;
