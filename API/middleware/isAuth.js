import jwt from "jsonwebtoken";
import user from "../modules/users.js"

const isAuth = async (req, res, next) => {
  try {
    const userToken = req.headers["auth"];

    //decoded token
    const decoded = await jwt.verify(userToken, process.env.privetKey);
    console.log(decoded);
    //end

    if (!decoded) {
      return res.status(401).send({ msg: "user not auth" });
    }

    //find user in DB
    const userFind = await user.findById(decoded.id);
    if (!userFind) {
      return res.status(401).send({ msg: "user not auth" });
    }
    console.log(userFind);
    //asysign
    req.user = userFind;
    next();
  } catch (error) {
    return res.status(500).send({ msg: "we have error", error });
  }
};
export default isAuth;
