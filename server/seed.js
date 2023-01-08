const conn = require("./conn");
const { User, Artist, Track, Vinyl } = require("./models");
const { randomUsers, specificUsers } = require("./dummyData.json");

const seed = async () => {
  try {
    console.log("Connecting to db");
    await conn.sync({ force: true });

    // LOADING USERS
    await Promise.all(specificUsers.map((user) => User.create(user)));
    await Promise.all(randomUsers.map((user) => User.create(user)));

    console.log("Seed Successful");
  } catch (error) {
    conn.close();
    console.error("An error has occurred while seeding.", error);
  }
};

seed();
