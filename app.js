import express from "express";
const a = express();
const port=process.env.PORT || 8000;
a.get("/", (_, res) => res.send("Test app is live!!"));
a.listen(port, () => console.log("Test app running..."));
