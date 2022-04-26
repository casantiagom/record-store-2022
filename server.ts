const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { paypalClientId: process.env.CLIENT_ID });
});
