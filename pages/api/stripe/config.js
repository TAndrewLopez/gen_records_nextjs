const handler = async (req, res) => {
  res.send({
    success: true,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

export default handler;
