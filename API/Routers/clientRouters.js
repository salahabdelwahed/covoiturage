import express from 'express';
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
})
//end



export default router;