
const express = require('express');
const app = express();
const path = require("node:path");

// serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true}));


const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT);
