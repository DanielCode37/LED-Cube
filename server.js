import express from "express";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
    res.sendFile(import.meta.url.replace("server.js", "public/panel.html").substring(8));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));