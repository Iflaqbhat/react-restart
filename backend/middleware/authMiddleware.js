const jwt = require("jsonwebtoken");

function authMiddleware(
  req,
  res,
  next
) 
 {

  const authHeader =
    req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({
      message: "Token missing"
    });
  }

  try {

    const token =
      authHeader.split(" ")[1];

    const decoded =
      jwt.verify(
        token,
        "secretkey"
      );

    req.user = decoded;

    next();

  } catch (e) {

    return res.status(401).json({
      message: "Invalid token"
    });
  }
}

module.exports = authMiddleware;