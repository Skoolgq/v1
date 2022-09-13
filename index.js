// NOTE: DON'T USE THIS FOR ACTUAL SERVERS WITH BACKEND!
// HAVE ACTUAL PATHS!
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.listen(8080);

