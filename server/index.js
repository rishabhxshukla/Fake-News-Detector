const express = require("express");
const app = express();
const dotenv = require("dotenv").config();


const port = process.env.PORT || 4000;


app.get("/api", (req, res) => {
    res.send("Sample response!");
});


app.listen(port, () => {
    console.log("Server started...");
});