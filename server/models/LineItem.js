const conn = require("../conn");

const {
  Sequelize: { STRING, INTEGER },
} = conn;

let idNum = 0;
const LineItem = conn.define(
  "lineItem",
  {
    id: {
      type: STRING,
      primaryKey: true,
      defaultValue: function () {
        idNum++;
        return `${idNum}-ITM`;
      },
    },
    qty: {
      type: INTEGER,
      defaultValue: 1,
    },
  },
  {
    hooks: {
      beforeCreate: async (lineItem) => {
        const currentItems = await LineItem.findAll({
          where: { orderId: lineItem.orderId },
        });
        if (
          currentItems.some((item) => item.vinylId === Number(lineItem.vinylId))
        )
          throw new Error("Item already exists in order");
      },
      beforeSave: async (lineItem) => {
        if (lineItem.qty < 1) throw new Error("Quantity cannot be less than 1");
        const vinyl = await lineItem.getVinyl();
        if (lineItem.qty > vinyl.stock)
          throw new Error("Quantity cannot be more than amount in stock");
      },
    },
  }
);

module.exports = LineItem;
