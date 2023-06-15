import mongoose from "mongoose";
import Message from "../models/message";
require("dotenv").config();

mongoose.set("strictQuery", false);

const mongoDB = process.env.DB_URL;

async function saveMessage(text: string, user: string, added: Date) {
  await mongoose.connect(mongoDB!).catch((err) => console.log(err));
  const message = new Message({ text, user, added });
  await message.save().catch((err) => console.log(err));
  await mongoose.disconnect();
}

export default saveMessage;
