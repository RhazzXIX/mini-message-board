import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello Up-skilling World!",
    user: "Driven Person",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "MiniMessageBoard", messages: messages });
});

module.exports = { router, messages };
