const { User } = require("../../../server/models");

const handler = async () => {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;
      const token = await User.authenticate({ username, password });
      res.status(202).json({ authorization: token });
    } catch (error) {
      res.status(500).json({ authorization: null, error });
    }
  }
};

export default handler;
