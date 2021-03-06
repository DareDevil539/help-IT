const mysql = require("mysql");
const filter = require("./filter");

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

String.prototype.replaceAll = function(search, replace) {
  return this.split(search).join(replace);
}

handleDisconnect();

module.exports = function(req, res) {
  let module = req.query.module;
  let params = req.query.params || "*";
  let query = parseQuery(req.query.query);
  let statusCode = 0;
  let headers = {};
  let end = "";

  params = params.replaceAll(" ", ", ");

  console.log(`select ${params} from ${module} where ${query}`);
  execute(`select ${params} from ${module} where ${query}`, sel => {
    for (let i = 0; i < filter.length; i++) {
      for (let j = 0; j < sel.length; j++) {
        delete sel[j][filter[i]];
      }
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(sel));
  });
};
