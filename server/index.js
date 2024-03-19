const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");


const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));


let news = "";
app.post("/", (req, res) => {
    news = req.body.news;
    res.send("News received!");
});


app.get("/getnews", (req, res) => {
    res.send({ news });
});


app.listen(port, () => {
    console.log("Server started...");
});