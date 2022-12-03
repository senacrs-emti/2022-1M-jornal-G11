require("dotenv").config();

const express = require("express");
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./database/database");

const newsRouter = require("./app/routes/news");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", newsRouter);

app.listen(3000);
console.log('3000 is the magic port');