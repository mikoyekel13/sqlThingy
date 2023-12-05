const mysql = require("mysql");
const fs = require("node:fs");

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
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
  fs.readdir("./entities", (err, files) => {
    if (err) throw err;
    for (let file of files) {
      fs.readFile(file, (err, content) => {
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
      });
    }
  });
});
