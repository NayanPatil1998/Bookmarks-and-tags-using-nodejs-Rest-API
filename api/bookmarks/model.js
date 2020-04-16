const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
  Link: {
    type: String,
    required: true,
    unique: true,
  },
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
  },
  publisher: {
    type: String
  },
  Tags : [{
      type:String
  }]
});

module.exports = mongoose.model('Bookmarks', bookmarkSchema)