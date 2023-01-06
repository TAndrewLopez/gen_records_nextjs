const { User } = require("../../../server/models");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      const token = await User.authenticate({ username, password });
      res.status(202).json({ authorization: token });
    } catch (error) {
      res.status(500).json({ authorization: null, error });
    }
  }
}
