const handler = (req, res) => {
  const payload = req.body;
  const signature = req.headers["stripe-signature"];

  console.log("payload from stripe", payload);
  res.status(200).json({ success: true });
};
export default handler;
