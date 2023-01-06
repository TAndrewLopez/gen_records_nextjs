const { User } = require("../../../server/models");

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { username, password, email, firstName, lastName } = req.body;
      const user = await User.create({
        username,
        password,
        email,
        firstName,
        lastName,
      });
      res.status(201).json({ authorization: user.generateToken() });
    } catch (error) {
      res.status(500).json({ authorization: null, error });
    }
  }
};
export default handler;
