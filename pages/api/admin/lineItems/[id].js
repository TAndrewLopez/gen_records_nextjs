import { LineItem } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const {} = req.body;
      const lineItem = await LineItem.findByPk(req.query.id);
      await lineItem.update({});

      const updatedLineItem = await LineItem.findByPk(req.query.id, {});
      res.status(200).json({ success: true, updatedLineItem });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const lineItem = await LineItem.findByPk(req.query.id);

      if (!lineItem) {
        return res.status(500).json({
          success: false,
          message: "Track doesn't exist in database.",
        });
      }

      await lineItem.destroy();
      res.status(200).json({ success: true, lineItem });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
