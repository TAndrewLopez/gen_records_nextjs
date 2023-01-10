const conn = require("./conn");

const Artist = require("./models/Artist");
const LineItem = require("./models/LineItem");
const Order = require("./models/Order");
const Track = require("./models/Track");
const User = require("./models/User");
const Vinyl = require("./models/Vinyl");

//ASSOCIATIONS
User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);

Vinyl.hasMany(LineItem);
LineItem.belongsTo(Vinyl);

Vinyl.hasMany(Track);
Track.belongsTo(Vinyl);

Artist.hasMany(Vinyl);
Vinyl.belongsTo(Artist);

module.exports = { conn, Artist, LineItem, Order, Track, User, Vinyl };
