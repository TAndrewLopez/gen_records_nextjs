const Sequelize = require("sequelize");
const pg = require("pg");

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/recordShop",
  { dialect: "postgres", dialectModule: pg, logging: false }
);

module.exports = conn;
