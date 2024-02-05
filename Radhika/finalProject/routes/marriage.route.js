import express from "express";
import {createMarriageProfile, deleteMarriageProfile, updateMarriageProfile, viewMarriageProfile} from "../controller/marriage.controller.js";
const router = express.Router();

router.post("/createMarriageProfile",createMarriageProfile);
router.post("/updateMarriageProfile",updateMarriageProfile);
router.post("/deleteMarriageProfile",deleteMarriageProfile);
router.post("/viewMarriageProfile",viewMarriageProfile);

export default router;