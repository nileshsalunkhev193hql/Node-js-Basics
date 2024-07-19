// core modules
import path from "path";
import { fileURLToPath } from "url";

// node modules
import express from "express";
import chalk from "chalk";
import hbs from "hbs";

const app = express(); // express is basically a function, that creates our node server.

const PORT = 3000; // port on which our server is running

const __filename = fileURLToPath(import.meta.url); // to get the current filepath using fileurltopath

const __dirname = path.dirname(__filename); // then paths dirname to get the directory path.

const publicPath = path.join(__dirname, "../public"); // public path to our public assets.

const viewsPath = path.join(__dirname, "../templates/views"); // we create this views path if views folder name is changed
// or if its location is not in root of directory.

const partialsPath = path.join(__dirname, "../templates/partials"); // creating partials path

hbs.registerPartials(partialsPath); // this is how we register partials

app.use(express.static(publicPath)); // exxpress.static to tell express app to use static files from this public path.

app.set("view engine", "hbs"); // setting view enging using hbs.

app.set("views", viewsPath); // setting views a views path if views folder is not in root of the project.

app.get("/help", (req, res) => {
  // this is how we use to render hbs files using .render method and pass dynamic values
  res.render("index", {
    title: "Dynamic value",
    name: "Help",
  });
});

app.get("/index", (req, res) => {
  // this is how we use to render hbs files using .render method and pass dynamic values
  res.render("index", {
    title: "Dynamic value",
    name: "Help",
  });
});

app.get("/ok", (req, res) => {
  // this is how we pass json / complex data structure using .send method.
  res.render("title", {
    title: "Title page",
    name: "Title page",
  });
});

app.listen(PORT, () => {
  // using app.listen method to tell express that our server is running
  console.log(chalk.blue(`Server is running on port ${PORT}`));
});
