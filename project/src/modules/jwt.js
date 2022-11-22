const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (token) {
    // if token exist.
    jwt.verify(token, "hexaworks", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(200).json({ err });
      } else {
        //console.log(decodedToken)
        if (decodedToken.isAdmin) {
          next();
        } else {
          res.json({
            succeeded: false,
            error: "You are not an admin :(",
          });
        }
      }
    });
  } else {
    res.json({
      succeeded: false,
      error: "No token.",
    });
  }
};
module.exports = {
  authenticateToken,
};

