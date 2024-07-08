const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user")
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password} = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    let hashedPass;

    try {
      hashedPass = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error Hashing Password",
      });
    }

    const newUser = await User.create({
      name,
      email,
      password: hashedPass
    });
    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "User Cannot Be Registered, Please Try Again Later!",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Pleace fill all the details carefully!!",
      });
    }

    let user0 = await User.findOne({ email });

    if (!user0) {
      return res.status(401).json({
        success: false,
        message: "User Not Found",
      });
    }

    const payload = {
      email: user0.email,
      id: user0._id,
    };
    
    // verify password and generate the JWT Token
    if (await bcrypt.compare(password, user0.password)) {
      // pass matched
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      const userWithToken = {
        _id: user0._id,
        email: user0.email,
        token: token,
      };

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        userWithToken,
        message: "User Logged in Successfully!",
      });
    } else {

      return res.status(403).json({
        success: false,
        message: "Password Incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while Logging In!",
    });
  }
};