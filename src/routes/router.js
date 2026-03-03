import express from "express";
import {
  getall,
  postall,
  deleteall,
  putall,
  getbyid,
} from "./../notescont/notecontroller.js";
const router = express.Router();

router.get("/", getall);

router.post("/", postall);

router.delete("/:idd", deleteall); 

router.put("/:idd", putall);

router.get("/:idd", getbyid);

export default router;
