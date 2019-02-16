const mysql = require("mysql");

let db_config = {
  host: "game.ok.uz.ua",
  user: "admin_game",
  password: "dVw4Gf9pqUade55",
  database: "admin_game",
  port: 3306
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(err => {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on("error", err => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();
console.log("DB server is running...");

connection.query("SELECT * from `users`", (err, res) => {
  if (err) throw err;
  console.log(res);
});

connection.end();
console.log("DB server is down...");