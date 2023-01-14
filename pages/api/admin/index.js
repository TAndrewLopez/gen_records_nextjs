import { User, Artist, Vinyl, Order } from "../../../server";
import { requireToken, isAdmin } from "../../../customMiddleware";

const handler = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Order,
    });
    users.sort((a, b) => a.id - b.id);

    const artists = await Artist.findAll({ include: Vinyl });
    artists.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });

    return res.status(200).json({ success: true, users, artists });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default requireToken(isAdmin(handler));
