var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const fs = require("node:fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("DROP DATABASE IF EXISTS mydb", function (err, result) {
      if (err) throw err;
      console.log("Database droped");
    });
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
    con.query("use mydb", function (err, result) {
      if (err) throw err;
      console.log("Database used");
    });
    fs.readdir("./public/entities", async (err, files) => {
      if (err) throw err;
      let count = 0;
      for (let file of files) {
        fs.readFile(`./public/entities/${file}`, (err, content) => {
          if (err) throw err;
          const name = file.split(".")[0];
          const obj = JSON.parse(content);
          let string = "";
          for (const [key, value] of Object.entries(obj)) {
            string += `, ${key} ${value}`;
          }
          string = string.slice(1);
          con.query(`CREATE TABLE ${name}(${string})`, function (err, result) {
            if (err) throw err;
            console.log(`${name} created`);
          });
          if (name === "admin") {
            con.query(
              `insert into admin(name, password, school_id) values('john', '123', 1),('jason', '123', 2)`,
              function (err, result) {
                if (err) throw err;
                console.log(`admin filled`);
              }
            );
            con.query(`select * from admin`, function (err, result) {
              if (err) throw err;
              console.log(result);
            });
          }
          // con.query(`describe ${name}`, function (err, result) {
          //   if (err) throw err;
          //   console.log(result);
          // });
        });
        count += 1;
        if (count === files.length) {
          res.send("finished");
        }
      }
    });
  });
});

module.exports = router;
