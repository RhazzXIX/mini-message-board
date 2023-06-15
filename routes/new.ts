import { Handler } from "express";
import saveMessage from "../DBhandlers/sendMessage";

const indexRouter = require("./index");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
} as Handler);

// Handle post messages
router.post("/", async function (req, res, next) {
  indexRouter.messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  await saveMessage(req.body.message, req.body.name, new Date()).catch((err) =>
    console.log(err)
  );
  res.redirect("/");
} as Handler);

module.exports = router;
