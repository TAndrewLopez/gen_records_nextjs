const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { Vinyl } from "../../../server";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      //GUEST CHECKOUT => GRAB PRICE ID FROM DB
      const { cart } = req.body;
      const lineItems = await Promise.all(
        cart.map(async (item) => {
          const vinyl = await Vinyl.findByPk(item.vinyl.id);
          const stripeProduct = await stripe.products.retrieve(
            String(vinyl.stripeId)
          );
          return { price: stripeProduct.default_price, quantity: item.qty };
        })
      );
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `https://gen-records.vercel.app/`,
        cancel_url: req.headers.origin,
      });
      res.redirect(303, session.url);
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default handler;
