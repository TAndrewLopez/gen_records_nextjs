const handler = async (req, res) => {
  if (req.method === "GET") {
    res.send({
      success: true,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  } else {
    res.status(405).end("Methjod not allowed.");
  }
};

export default handler;
