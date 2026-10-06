import express from "express";
const a = express();
const port = process.env.PORT || 8000;
a.get("/", (_, res) => res.send("DEPLOY CHECK, ALL GOODDD!!"));
a.listen(port, () => console.log("Test app is running....."));
