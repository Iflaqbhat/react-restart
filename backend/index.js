const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (
    email === "test@gmail.com" &&
    password === "123456"
  ) {

    return res.json({
      token: "abcd1234",
      user: {
        name: "Iflaq"
      }
    });
  }

  return res.status(401).json({
    message: "Invalid credentials"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});