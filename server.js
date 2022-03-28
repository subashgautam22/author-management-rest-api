const express = require("express");
const bodyParser = require("body-parser"); /* deprecated */
// const cors = require("cors");

const app = express();

app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to subash application." });
});

require("./app/routes/tutorial.routes.js")(app);


// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
