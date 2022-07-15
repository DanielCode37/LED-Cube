const express = require("express");
const execute = require("./control.js")

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/public"))

app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/public/panel.html");
});

app.get("/trigger/:num", async (req, res) => {
    console.log(req.params.num);
    execute(req.params.num);
    res.send("started!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));