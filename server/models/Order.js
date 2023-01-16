const conn = require("../conn");

const {
  Sequelize: { STRING, BOOLEAN },
} = conn;

let idNum = 0;
const Order = conn.define("order", {
  // id: {
  //   type: STRING,
  //   primaryKey: true,
  //   defaultValue: function () {
  //     idNum++;
  //     return `ORD-${idNum}`;
  //   },
  // },
  complete: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Order;
