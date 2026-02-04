import express from "express";
const a = express();
a.get("/", (_, res) => res.send("Test app is finally live!!"));
a.listen(8000, () => console.log("Test app running..."));
