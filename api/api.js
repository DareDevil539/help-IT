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
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

function execute(query, cb) {
  connection.query(query, (err, sel) => {
    if (err) throw err;
  
    return cb(sel);
  });
}

function parseQuery(query) {
  if (!query) return 1;
  let res = "";
  let subs = query.split(" ");

  subs.forEach((sub, index) => {
    subs[index] = sub.replace(":", " like ");
  });

  res = subs.join(", ");

  return res;
}

handleDisconnect();

module.exports = function(req, res) {
  let module = req.query.module;
  let params = req.query.params || "*";
  let query = parseQuery(req.query.query);

  params = params.replace(" ", ", ");

  console.log(`select ${params} from ${module} where ${query}`);
  res.writeHead(200, { "Content-Type": "application/json" });
  execute(`select ${params} from ${module} where ${query}`, sel => {
    console.log(sel);
    res.end(JSON.stringify(sel));
  });
}