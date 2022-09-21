const express = require("express");
const app = express();
const port = 3000;
const routes = require("./src/routes");

app.use(express.static("./public"));
app.set("views", "./src/views/pages");

routes(app);

app.set("view engine", "ejs");

app.get("*", (req, res) => {
  let noSearchBox = false;
  let path = req.path;
  res.render("error404", { noSearchBox, path});
});
app.listen(port, console.log(`listen on port ${port}`));
