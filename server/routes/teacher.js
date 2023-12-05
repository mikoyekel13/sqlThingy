var express = require("express");
var router = express.Router();
const mysql = require("mysql");

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
      con.query(
        `insert into teacher (name, password, email) values(${req.body.name}, ${req.body.password}, (${req.body.email})`,
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
