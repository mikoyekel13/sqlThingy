var express = require("express");
var router = express.Router();
const mysql = require("mysql");

router.get("/", function (req, res, next) {
  try {
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "z10mz10m",
      db: "mydb",
    });
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(
        `select school.name school_name, admin.name admin_name from school join admin on school.id = admin.school_id`,
        function (err, result) {
          if (err) throw err;
          res.send(result);
        }
      );
    });
  } catch (e) {
    res.status(404).send("failed");
  }
});

router.post("/", function (req, res, next) {
  try {
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "z10mz10m",
      db: "mydb",
    });
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(`select password from admin`, function (err, result) {
        if (err) throw err;
        result.forEach((password) => {
          if (password === req.body.password) {
            con.query(
              `insert into school (name, school_code) values(${req.body.name}, ${req.body.schoolCode}`,
              function (err, result) {
                if (err) throw err;
                res.send(result);
              }
            );
          }
        });
      });
    });
  } catch (e) {
    res.status(404).send("failed");
  }
});

module.exports = router;
