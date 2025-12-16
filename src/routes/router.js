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

router.delete("/:idd", deleteall); //whatever we put here we have to put it it req.param. ----> here <----

router.put("/:idd", putall);

router.get("/:idd", getbyid);

export default router;
