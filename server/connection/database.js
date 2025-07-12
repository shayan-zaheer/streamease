const mysql = require("mysql2");
const fs = require("fs");

const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        // ca: fs.readFileSync(__dirname + "/ca.pem"),
        ca: process.env.DB_CA
    },
});

module.exports = connection;