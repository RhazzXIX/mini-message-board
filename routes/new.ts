import { Handler } from "express";

const indexRouter = require("./index");
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
} as Handler);

// Handle post messages
router.post("/", function (req, res, next) {
  indexRouter.messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
} as Handler);

module.exports = router;
