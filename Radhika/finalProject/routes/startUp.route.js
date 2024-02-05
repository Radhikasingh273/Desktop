import express from "express";
import {createStartUpProfile, updateStartUpProfile, deleteStartUpProfile, viewStartUpProfile} from "../controller/startUp.controller.js";
const router = express.Router();

router.post("/createStartUpProfile",createStartUpProfile);
router.post("/updateStartUpProfile",updateStartUpProfile);
router.post("/deleteStartUpProfile",deleteStartUpProfile);
router.post("/viewStartUpProfile",viewStartUpProfile);

export default router;