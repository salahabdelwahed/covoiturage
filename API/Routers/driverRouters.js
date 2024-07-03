import express from "express";
import service from "../modules/services.js";

const router = express.Router();
//post service
router.post("/add", async (req, res) => {
  try {
    const newService = service(req.body);
    await newService.save();
    res.status(200).send({ msg: "service added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "invalid", error });
  }
});
//end
//get service
router.get("/service", async (req, res) => {
    try {
        const getService = await service.find();
        res.status(200).send({ msg: "Service getted successfully", getService });
      } catch (error) {
        res.status(500).send({ msg: "invalid", error });
      }
})
//end
//delete service
router.delete("/:id", async (req, res) => {
  try {
    const idServices = req.params.id;
    const ServiceDel = await service.deleteOne({ _id: idServices });
    ServiceDel.deletedCount
      ? res.status(200).send({ msg: "Service deleted successfully" })
      : res.status(200).send({ msg: "Service alredy deleted " });
  } catch (error) {
    res.status(500).send({ msg: "inviled request ", error });
  }
});
//end
//update service
router.put("/:id", async (req, res) => {
  try {
    const updateService = await service.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    updateService.modifiedCount
      ? res.status(200).send({ msg: "Service updated successfully" })
      : res.status(200).setDefaultEncoding({ msg: "Service already updated" });
  } catch (error) {
    res.status(500).send({ msg: "inviled request ", error });
  }
});
//end

export default router;
