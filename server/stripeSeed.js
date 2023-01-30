require("dotenv").config();
const axios = require("axios");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Vinyl } = require("../server");

const stripeSeed = async () => {
  try {
    console.log("Stripe seed initialized...");
    const { data } = await axios.get("https://gen-records.vercel.app/api/shop");

    //DUE TO STRIPE LIMIT, ONLY 25 CALLS PER SECONDS
    const slice = data.vinyls.slice(75, 100);

    slice.forEach(async (item) => {
      const vinyl = await Vinyl.findByPk(item.id);
      const stripeProduct = await stripe.products.create({
        name: item.name,
        description: "Artificial Vinyl",
        images: [item.img],
        default_price_data: {
          currency: "usd",
          unit_amount: item.price,
        },
      });

      //UPDATES DB WITH REFERENCE TO SPOTIFY PRODUCT ID
      await vinyl.update({
        stripeId: stripeProduct.id,
      });
    });

    console.log("Stripe seed successful.");
  } catch (error) {
    console.error("An error has occurred while seeding to stripe.", error);
  }
};

stripeSeed();
