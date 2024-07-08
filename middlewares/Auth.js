const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Auth = (req, res, next) => {
  try {
    console.log("cookie:", req.cookies?.token);
    console.log("body:", req.body.token);
    console.log("header:", req.header("Authorization"));

    const token =
      req.cookies?.token ||
      req.body.token ||
      (req.header("Authorization") &&
        req.header("Authorization").replace("Bearer ", ""));

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      req.userWithToken = payload;
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      return res.status(401).json({
        success: false,
        message: "Token is Invalid",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({
      success: false,
      message: "Something went Wrong!",
    });
  }
};
