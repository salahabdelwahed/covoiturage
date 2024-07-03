import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../modules/users.js";
import {
  validation,
  validationRegister,
  validateLogin,
} from "../middleware/validator.js";
import isAuth from "../middleware/isAuth.js";

const router = express.Router();

router.post("/registre", validation, validationRegister(), async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const emailFind = await User.findOne({ email });
    const usernameFind = await User.findOne({ username });
    if (emailFind || usernameFind) {
      return res
        .status(400)
        .send({ msg: "username or email is already exited !!" });
    }

    //prep data
    const dataUser = new User({ username, email, password });
    //end

    //hased password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    dataUser.password = hash;
    //end hashed

    //save data
    const dataNewUser = await dataUser.save();
    // end save

    //generate acces token
    const payload = { id: dataNewUser._id };
    const scret = process.env.privetKey;
    const option = { expiresIn: 3600 };
    const userToken = jwt.sign(payload, scret, option);
    //end

    res.status(200).send({ msg: "new user added" });
  } catch (error) {
    res.status(500).send({ msg: "can't get user", error });
  }
});
//end

//login
router.post("/login", validateLogin(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    const userfind = await User.findOne({ email });
    if (!userfind) {
      return res
        .status(400)
        .send({ msg: "email or password incorrect '<email>' !!" });
    }
    const isMatch = await bcrypt.compare(password, userfind.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ msg: "email or password incorrect '<pass>'!!" });
    }
    //generate token
    const payload = { id: userfind._id };
    const scret = process.env.privetKey;
    const option = { expiresIn: 3600 };
    const userToken = jwt.sign(payload, scret, option);
    //end

    res.status(200).send({ msg: "welcome", userToken });
  } catch (error) {
    res.status(500).send({ msg: "can't login user", error });
  }
});
//end
//test current user
router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "user is auth", User: req.User });
});
//end

export default router;
