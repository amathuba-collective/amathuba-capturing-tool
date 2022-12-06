const Joi = require("joi");
const { object, string } = Joi.types();
const mongoose = require("mongoose");

// Data modeling final output that must be exepected by db

const convo = mongoose.model(
  "convo",
  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    agentName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 15,
    },
    youthName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 15,
    },
    openingQuestion: {
      type: [String],
      required: true,
      minlength: 5,
      maxlength: 60,
    },
    recommendedQuestions: {
      type: [String],
      required: true,
      minlength: 5,
      maxlength: 60,
    },
    possibleAnswers: {
      type: [String],
      required: true,
      minlength: 5,
      maxlength: 60,
    },
    promptedQuestions: {
      type: [String],
      required: true,
      minlength: 5,
      maxlength: 60,
    },
    youthReflection: {
      type: [String],
      required: true,
      minlength: 5,
      maxlength: 90,
    },

    AgentReflection: {
      type: [String],
      required: true,
      minlength: 5,
      maxlength: 60,
    },
    nextBooking: {
      type: Date,
      required: true,
    },
    endReason: {
      type: Date,
      required: true,
    },
    createdAt: Date.now(),
  })
);

function validateconvo(convo) {
  const schema = object.keys({
    name: string.min(5).max(50).required(),
    email: string.min(5).max(255).required().email(),
    password: string.min(5).max(255).required(),
  });

  return schema.validate(convo);
}

exports.convo = convo;
exports.validateconvo = validateconvo;
