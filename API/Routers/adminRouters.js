console.clear()
import express from "express";
import User from "../modules/users.js";

const router = express.Router();
//post driver
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
// post client
router.post("/addClient", async (req, res) => {
  try {
    const newClient = User(req.body);
    await newClient.save();
    res.status(200).send({ msg: "Client added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "invalid", error });
  }
});
//end
//delete driver
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
//end
// delete client
router.delete("/delClient/:id", async (req, res) => {
  try {
    const idClient = req.params.id;
    const clientDel = await User.deleteOne({ _id: idClient });
    clientDel.deletedCount
      ? res.status(200).send({ msg: "driver deleted successfully" })
      : res.status(200).send({ msg: "driver alredy deleted " });
  } catch (error) {
    res.status(500).send({ msg: "inviled request ", error });
  }
});
//end

export default router;
