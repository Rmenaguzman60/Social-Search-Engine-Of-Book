const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
