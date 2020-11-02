const dbConfig = require("../config/db.config.js");
const express = require("express");
const app = express();

const serverType = app.get('env')


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig[serverType].DB, dbConfig[serverType].USER, dbConfig[serverType].PASSWORD, {
    host: dbConfig[serverType].HOST,
    dialect: dbConfig[serverType].dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig[serverType].pool.max,
        min: dbConfig[serverType].pool.min,
        acquire: dbConfig[serverType].pool.acquire,
        idle: dbConfig[serverType].pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);

module.exports = db;