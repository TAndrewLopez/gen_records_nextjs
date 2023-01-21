const conn = require("../conn");

const {
  Sequelize: { STRING },
} = conn;

const Artist = conn.define("artist", {
  name: {
    type: STRING,
    allowNull: false,
  },
  spotifyId: {
    type: STRING,
    allowNull: false,
  },
  genre: {
    type: STRING,
    defaultValue: "",
  },
});

module.exports = Artist;
