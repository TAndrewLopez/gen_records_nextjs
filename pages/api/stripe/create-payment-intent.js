import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: 1999,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
};

export default handler;
