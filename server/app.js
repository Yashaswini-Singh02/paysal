const express = require("express");
const app = express();
const client = require("./utils/database");

app.get("/", (req, res) => {
    const db = client.db('paysal');
    const result = db.collection("organisation").insertOne({Name: "Karan"})

  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
