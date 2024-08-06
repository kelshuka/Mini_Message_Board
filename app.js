
const express = require('express');
const app = express();
const path = require("node:path");

// serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const butts = [
    {href: "new", text: "Add new message"},
];


app.get("/", (req, res) => {
    res.render("index", {title:"Mini Messageboard", mainMessages: messages});
});

// Add new message

app.get("/new", (req, res) => {
    res.render("form");
});

app.use(express.urlencoded({ extended: true}));

app.post("/new", (req,res) => {
    const Text = req.body.Text;
    const User = req.body.User;

    messages.push({ text: Text, user: User, added: new Date() });
    res.redirect("/");
});

const PORT = 3000;
app.listen(PORT);