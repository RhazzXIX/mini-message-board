import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  added: Date,
});

const Messages = mongoose.model("Messages", MessageSchema);

export default Messages;
