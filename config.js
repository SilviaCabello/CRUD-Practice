const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "silvia",
  password: "Adminpass123!",
  database: "clinic",
});

module.exports = connection;
