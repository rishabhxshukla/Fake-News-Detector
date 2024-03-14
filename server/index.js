const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { spawn } = require("child_process");


const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));


app.post("/", (req, res) => {

    const news = req.body.news;

    //Executing python script with the received news
    const pythonProcess = spawn("python", ["backend.py", news]);

    //Successful :
    pythonProcess.stdout.on("data", (data) => {
        console.log(`Output : ${data}`);
    });

    //Error :
    pythonProcess.stderr.on("data", (data) => {
        console.error(`Error : ${data}`);
    });

    res.send("News received and detection started!");
});


app.listen(port, () => {
    console.log("Server started...");
});