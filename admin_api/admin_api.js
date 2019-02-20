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

function execute(prevent = "", query, cb) {
  if (prevent !== "You haven`t access!") {
    connection.query(query, (err, sel) => {
      if (err) throw err;
  
      return cb(sel);
    });
  } else {
    cb(prevent);
  }
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
  let operation = req.query.operation || "";
  let module = req.query.module;
  let params = req.query.params || "*";
  let origin = req.query.origin || "";
  let query = parseQuery(req.query.query);

  params = params.replaceAll(" ", ", ");

  //operation=insert&module=users&params=email+password+name+surname+skills&query="serus@serus.com"+"12345"+"yaya"+"tyty"+"hz,hz,hz,hz,hz,hz"
  if (operation === "select") {
    execute(`select ${params} from ${module} where ${query}`, sel => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(sel));
    });
  } else if (operation === "insert") {
    console.log(`insert into ${module}(${params}) values (${query})`);
    execute(operation === "аdmіn", `insert into ${module}(${params}) values (${query})`, () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("");
    });
  }
};
