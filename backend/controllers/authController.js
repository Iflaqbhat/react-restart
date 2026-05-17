const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const users =
  require("../data/users");


// REGISTER

async function register(req, res) {

  const {
    username,
    email,
    password
  } = req.body;

  try {

    if (
      !username ||
      !email ||
      !password
    ) {

      return res.status(400).json({
        message: "Fill all fields"
      });
    }

    const existingUser =
      users.find(
        user =>
          user.email === email
      );

    if (existingUser) {

      return res.status(400).json({
        message: "User exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      username,
      email,
      password: hashedPassword
    };

    users.push(newUser);

    const token = jwt.sign(
      { email: newUser.email },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "Registered",
      token
    });

  } catch (e) {

    res.status(500).json({
      message: "Server error"
    });
  }
}


// LOGIN

async function login(req, res) {

  const {
    email,
    password
  } = req.body;

  try {

    const user =
      users.find(
        user => user.email === email
      );

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return res.status(400).json({
        message: "Wrong password"
      });
    }

    const token = jwt.sign(
      { email: user.email },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (e) {

    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = {
  register,
  login
};