var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();

var mongo = require("./config/config");
mongo();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var getHotelRouter = require("./routes/getHotel");
var getCityRouter = require("./routes/getCity");
var getUserRouter = require("./routes/getAccount");
var getRoomRouter = require("./routes/getRoom");
var getDonDatPhongRouter = require("./routes/getDonDatPhong");
var getHoaDonRouter = require("./routes/getHoaDon");
var getRoleRouter = require("./routes/getRole");

app.use("/", getCityRouter);
app.use("/", getHotelRouter);
app.use("/", getUserRouter);
app.use("/", getRoomRouter);
app.use("/", getDonDatPhongRouter);
app.use("/", getHoaDonRouter);
app.use("/", getRoleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
