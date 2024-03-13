import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  mode: { type: String, required: true },
  message: { type: String, required: true },
});

const Reminder = mongoose.model("Reminder", reminderSchema);
export default Reminder;
