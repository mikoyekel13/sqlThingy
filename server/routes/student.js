var express = require("express");
var router = express.Router();
const mysql = require("mysql");

router.get("/", function (req, res, next) {
  try {
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "z10mz10m",
      database: "mydb",
    });
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(`select name from student`, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    });
  } catch (e) {
    res.status(404).send("failed");
  }
});

router.get("/:classroom_id", function (req, res, next) {
  try {
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "z10mz10m",
      database: "mydb",
    });
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(
        `select name from student where classroom_id = ${req.params.classroom_id}`,
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
  console.log("hi");
  try {
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "z10mz10m",
      database: "mydb",
    });
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(
        `insert into student (name, password, classroom_id) values('${req.body.name}', '${req.body.password}', ${req.body.classId})`,
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

module.exports = router;
