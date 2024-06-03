const express = require("express");
const router = express.Router();
const Contact = require("../../../../models/Contact");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const newContact = new Contact({
    name,
    email,
    subject,
    message,
  });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
