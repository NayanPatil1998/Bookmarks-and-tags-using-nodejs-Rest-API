const mongoose = require("mongoose");

const tagsSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  TimeCreated: {
    type: Date,
  },
  TimeUpdated: {
    type: Date,
  }
});

module.exports = mongoose.model('tags', tagsSchema)