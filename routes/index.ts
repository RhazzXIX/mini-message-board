import { NextFunction, Request, Response } from "express";
import fetchMessage from "../DBhandlers/fetchMesages";
import mongoose from "mongoose";
const express = require("express");
const router = express.Router();

type message = {
  text: string;
  user: string;
  added: Date;
};

/* GET home page. */
router.get(
  "/",
  async function (req: Request, res: Response, next: NextFunction) {
    await fetchMessage()
      .then((fetchedMessages) => {
        res.render("index", {
          title: "Mini Message Board",
          messages: fetchedMessages.sort((a: message, b: message) => {
            return b.added.getTime() - a.added.getTime();
          }),
        });
      })
      .catch((err) => next(err));
  }
);

module.exports = { router };
