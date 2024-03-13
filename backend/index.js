import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import Reminder from "./model/Reminder.js";

const app = express();
const port = 7000;
app.use(cors());
//parsing the json from req.body
app.use(express.json());
//connecting to the mongoDB
mongoose
  .connect(String(process.env.MONGO_CONNECTION_STRING))
  .then(() => console.log("connected to DB"));

//Welcoming Api
app.get("/", (req, res) => {
  res.send("Welcome to Reminder app");
});

//api endpoint to test
app.get("/test", (req, res) => {
  res.status(200).send({ message: "ok" });
});
// Sample API endpoint to save reminder data
// can be extended the functionality in future
app.post("/api/reminder", async (req, res) => {
  try {
    const { userId, date, time, mode, message } = req.body;
    const reminder = new Reminder({ userId, date, time, mode, message });
    await reminder.save();
    res.status(201).json({ message: "Reminder saved successfully" });
  } catch (error) {
    console.error("Error saving reminder:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/reminder/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const reminders = await Reminder.find({ userId });
    res.status(200).json(reminders);
  } catch (error) {
    console.error("Error fetching reminders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
