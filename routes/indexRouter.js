
const { Router } = require("express");
const indexRouter = Router();


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

indexRouter.get("/", (req, res) => {
    res.render("index", {title:"Mini Message Board", mainMessages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.get("/open/:id", (req, res) => {
    const message = messages[req.params.id];
    res.render("open", { message });
});


indexRouter.post("/new", (req,res) => {
    const Text = req.body.Text;
    const User = req.body.User;

    messages.push({ text: Text, user: User, added: new Date() });
    res.redirect("/");
});

module.exports = indexRouter;
