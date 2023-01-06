export default async function handler(req, res) {
  try {
    res.json({ message: "you win" });
  } catch (error) {
    res.status(500).send(error);
  }
}
