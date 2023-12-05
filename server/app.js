var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var teacherRouter = require("./routes/teacher");
var classroomRouter = require("./routes/classroom");
var studentRouter = require("./routes/student");
var schoolRouter = require("./routes/school");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/classroom", classroomRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/school", schoolRouter);

module.exports = app;
