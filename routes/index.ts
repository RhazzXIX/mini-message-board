import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();

type message = {
  text: string;
  user: string;
  added: Date;
};

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(1686629585892),
  },
  {
    text: "Hello Up-skilling World!",
    user: "Driven Person",
    added: new Date(1686629623383),
  },
];

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages.sort((a: message, b: message) => {
      return b.added.getTime() - a.added.getTime();
    }),
  });
});

module.exports = { router, messages };
