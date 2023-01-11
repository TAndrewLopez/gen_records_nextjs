import { Vinyl } from "../../../server";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { cart } = req.body;
      cart.forEach(async (item) => {
        const product = await Vinyl.findByPk(item.vinyl.id);
        await product.update({ stock: product.stock - item.qty });
      });
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export default handler;
