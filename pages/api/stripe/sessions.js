const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: "{{PRICE_ID}}", quantity: 1 }],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: req.headers.origin,
      });
      res.status(200).json({ success: true, session });
    } catch (error) {
      console.log(error);
      res
        .status(error.statusCode || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default handler;
