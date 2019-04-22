/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true })); //app.use bodyParser 왜 쓰는지?

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "1.231.34.117",
  port: 5000,
  user: "movie",
  password: "qwer1212",
  database: "movie_search"
});

connection.connect();

app.get("/test", (req, res) => {
  let sql = "select * from movie";
  connection.query(sql, function(err, rows, fields) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
      // for (var i = 0; i < rows.length; i++) {
      //   console.log(rows[i].admin_id);
      // }
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.get("/pass", (req, res) => {
  let data = req.query.data;
  res.send(data);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
