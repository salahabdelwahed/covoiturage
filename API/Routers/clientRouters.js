console.clear();
import express from "express";
import service from "../modules/services.js";

const router = express.Router();

//get service
router.get("/serviceClient", async (req, res) => {
  try {
    const getService = await service.find();
    res.status(200).send({ msg: "Service getted successfully", getService });
  } catch (error) {
    res.status(500).send({ msg: "invalid", error });
  }
});
//end
//demeande service
//demande Service
router.post("/reqService", async (req, res) => {
  try {
    const newSercive = service(req.body);
    await newSercive.save();
    res.status(200).send({ msg: "Service added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "invalid", error });
  }
});
//end

export default router;
