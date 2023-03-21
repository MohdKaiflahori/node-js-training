const express = require("express");
const app = express();
const mw = require("../middleware/middleware1");
const controller = require("../controller/controller");

// app.get("/get", (req, res) => {
//   res.send("in the router file");
// });

app.post("/user", mw.middlewareUser, controller.signUpFunction);

app.post("/login", controller.loginFunction);

app.post("/book", mw.middlewarePost, controller.bookPostFunction);

app.put("/book", mw.middlewarePut, controller.bookPutFunction);
app.delete("/book", mw.middlewareDel, controller.bookDelFunction);

app.get("/book", controller.bookGetFunction);

module.exports = app;

// generate jwt token and store it in the db
// cookies storation
// get token from the cookie and check it
