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

function parseQuery(query, j) {
  if (!query) return 1;
  let res = "";
  let subs = query.split(" ");

  subs.forEach((sub, index) => {
    subs[index] = sub.replace(":", " like ");
  });

  res = subs.join(j);

  return res;
}

String.prototype.replaceAll = function(search, replace) {
  return this.split(search).join(replace);
}

handleDisconnect();

module.exports = function(req, res) {
  let operation = req.query.operation || "";
  let module = req.query.module;
  let params = req.query.params || "*";

  params = params.replaceAll(" ", ", ");

  //operation=insert&module=users&params=email+password+name+surname+skills&query="serus@serus.com"+"12345"+"yaya"+"tyty"+"hz,hz,hz,hz,hz,hz"
  if (operation === "select") {
    let query = parseQuery(req.query.query, "and ");
    console.log(`select ${params} from ${module} where ${query}`);
    execute(`select ${params} from ${module} where ${query}`, sel => {
      console.log(sel);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(sel));
    });
  } else if (operation === "insert") {
    let query = parseQuery(req.query.query, ", ");
    console.log(`insert into ${module}(${params}) values (${query})`);
    execute(`insert into ${module}(${params}) values (${query})`, () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Done");
    });
  }
};
