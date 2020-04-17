const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




/***************  Database ****************************/

console.log(process.env.DB_URL);

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database Connected");
  }
);
/* ******************************************************* */



const bookmarksRoute = require("./api/bookmarks/route");
const TagsRoute = require("./api/tags/route");

app.use("/api", bookmarksRoute);
app.use("/api", TagsRoute);


app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("server is listening on PORT " + process.env.PORT || 5000);
});
