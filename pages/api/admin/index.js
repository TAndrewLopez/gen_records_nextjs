import { User, Artist, Vinyl, Order, Track, LineItem } from "../../../server";
import { requireToken, isAdmin } from "../../../customMiddleware";

const handler = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Order,
    });
    users.sort((a, b) => a.id - b.id);

    const vinyls = await Vinyl.findAll({
      include: [Artist, Track],
    });
    vinyls.sort((a, b) => a.id - b.id);

    const artists = await Artist.findAll({ include: Vinyl });
    artists.sort((a, b) => a.id - b.id);

    const tracks = await Track.findAll();
    tracks.sort((a, b) => a.id - b.id);

    const orders = await Order.findAll({
      include: User,
    });
    orders.sort((a, b) => a.id - b.id);

    const lineItems = await LineItem.findAll();
    lineItems.sort((a, b) => a.id - b.id);

    return res.status(200).json({
      success: true,
      users,
      vinyls,
      artists,
      tracks,
      orders,
      lineItems,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default requireToken(isAdmin(handler));
