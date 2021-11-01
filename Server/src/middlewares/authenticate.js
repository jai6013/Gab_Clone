const { verify } = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, process.env.JWT_KEY, function (err, user) {
      if (err) return reject(err);
      return resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  try {
    const header = req?.headers?.authorization;

    if (!header)
      return res
        .status(401)
        .json({ message: "authorization not found in headers" });

    if (!header.startsWith("Bearer"))
      return res.status(401).json({ message: "Bearer token not found" });

    const token = header.trim().split(" ")[1];

    try {
      const user = await verifyToken(token);
      req.user = user.user;
      next();
    } catch (err) {
      return res.status(400).send(err);
    }
  } catch (err) {
    return res.status(400).send(err);
  }
};
