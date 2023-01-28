import { requireToken } from "../../../../customMiddleware";
import { LineItem, Vinyl, Artist } from "../../../../server";

const handler = async (req, res) => {
  try {
    const lineItem = await LineItem.findByPk(req.body.id);
    await lineItem.update({ qty: req.body.qty });
    const updatedItem = await LineItem.findByPk(req.body.id, {
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
    res.status(200).json({ success: true, updatedItem });
  } catch (error) {
    console.log(error);
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
};

export default requireToken(handler);
