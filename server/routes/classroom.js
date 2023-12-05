var express = require("express");
var router = express.Router();
const mysql = require("mysql");

router.post("/", function (req, res, next) {
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
        `insert into classroom (grade, class_num, teacher_id) values('${req.body.grade}', ${req.body.classNum}, ${req.body.teacherId})`,
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
