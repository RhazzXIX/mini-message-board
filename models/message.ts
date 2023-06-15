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
  added: {
    type: Date,
    required: true,
  },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
