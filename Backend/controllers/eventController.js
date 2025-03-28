const Event = require("../models/Event");

const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

const createEvent = async (req, res) => {
  const { name, description, date, location, category } = req.body;
  const newEvent = new Event({ name, description, date, location, category });

  await newEvent.save();
  res.status(201).json(newEvent);
};

module.exports = { getEvents, createEvent };
