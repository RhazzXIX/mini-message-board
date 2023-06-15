import mongoose from "mongoose";
import Message from "../models/message";
require("dotenv").config();

const mongoDB = process.env.DB_URL;

mongoose.set("strictQuery", false);

async function fetchMessage() {
  await mongoose.connect(mongoDB!);
  const messages = await Message.find().exec();
  await mongoose.disconnect();
  return messages;
}

export default fetchMessage;
