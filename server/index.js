const conn = require("./conn");
const { Artist, LineItem, Order, Track, User, Vinyl } = require("./models");

//ASSOCIATIONS
User.hasMany(Order, {
  onDelete: "CASCADE",
});
Order.belongsTo(User);

Order.hasMany(LineItem, {
  onDelete: "CASCADE",
});
LineItem.belongsTo(Order);

Vinyl.hasMany(LineItem, {
  onDelete: "CASCADE",
});
LineItem.belongsTo(Vinyl);

Vinyl.hasMany(Track, {
  onDelete: "CASCADE",
});
Track.belongsTo(Vinyl);

Artist.hasMany(Vinyl, {
  onDelete: "CASCADE",
});
Vinyl.belongsTo(Artist);

module.exports = { conn, Artist, LineItem, Order, Track, User, Vinyl };
