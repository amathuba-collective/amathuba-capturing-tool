const Joi = require("joi");
const { object, string } = Joi.types();
const mongoose = require("mongoose");

// Data modeling final output that must be exepected by db

const youth = mongoose.model(
  "youth",
  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
  })
);

function validateyouth(youth) {
  const schema = object.keys({
    name: string.min(5).max(50).required(),
    email: string.min(5).max(255).required().email(),
    password: string.min(5).max(255).required(),
  });

  return schema.validate(youth);
}

exports.youth = youth;
exports.validateyouth = validateyouth;
