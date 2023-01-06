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
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error has occurred creating payment intents.",
    });
  }
};

export default handler;
