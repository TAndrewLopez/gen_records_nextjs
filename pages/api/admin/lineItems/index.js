import { LineItem } from "../../../../server";
import { isAdmin, requireToken } from "../../../../customMiddleware";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const lineItem = await LineItem.create(req.body);
      res.status(200).json({ success: true, lineItem });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: true, message: error.message });
    }
  }
};

export default requireToken(isAdmin(handler));
