const conn = require("../conn");

const {
  Sequelize: { STRING, INTEGER, BOOLEAN },
} = conn;

let idNum = 0;
const Track = conn.define("track", {
  id: {
    type: STRING,
    primaryKey: true,
    defaultValue: function () {
      idNum++;
      return `${idNum}-TRK`;
    },
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  spotifyId: {
    type: STRING,
    allowNull: false,
  },
  length: {
    type: INTEGER,
    allowNull: false,
  },
  explicit: {
    type: BOOLEAN,
    defaultValue: false,
  },
  preview: {
    type: STRING,
    defaultValue: null,
  },
});

module.exports = Track;
