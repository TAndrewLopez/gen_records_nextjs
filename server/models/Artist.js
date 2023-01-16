const conn = require("../conn");

const {
  Sequelize: { STRING },
} = conn;

let idNum = 0;

const Artist = conn.define("artist", {
  id: {
    type: STRING,
    primaryKey: true,
    defaultValue: function () {
      idNum++;
      return `${idNum}-ART`;
    },
  },
  name: {
    type: STRING,
    notNull: true,
  },
  spotifyId: {
    type: STRING,
  },
  genre: {
    type: STRING,
    defaultValue: "",
  },
});

module.exports = Artist;
