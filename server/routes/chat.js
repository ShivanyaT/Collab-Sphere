// routes/chat.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Get all messages
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

// Post a message
router.post("/", async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.json({ message: "Message sent!" });
});

module.exports = router;
