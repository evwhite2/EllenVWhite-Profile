const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("assets"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./routes/routes");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
