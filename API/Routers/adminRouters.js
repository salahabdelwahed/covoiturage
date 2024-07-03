import express from 'express';
import User from '../modules/users.js';



const router = express.Router();
//post service
router.post("/addDriver", async (req, res) => {
    try {
      const newDriver = User(req.body);
      await newDriver.save();
      res.status(200).send({ msg: "Driver added successfully" });
    } catch (error) {
      res.status(500).send({ msg: "invalid", error });
    }
  });
  //end
  //delete service
router.delete("/delDriver/:id", async (req, res) => {
    try {
      const idDriver = req.params.id;
      const driverDel = await User.deleteOne({ _id: idDriver });
      driverDel.deletedCount
        ? res.status(200).send({ msg: "driver deleted successfully" })
        : res.status(200).send({ msg: "driver alredy deleted " });
    } catch (error) {
      res.status(500).send({ msg: "inviled request ", error });
    }
  });

  export default router;