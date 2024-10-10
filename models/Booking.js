// // models/Booking.js
// const mongoose = require('mongoose');

// // Define the booking schema
// const bookingSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Optional: Ensure each email is unique
//     match: /.+\@.+\..+/ // Basic email validation
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   message: {
//     type: String,
//     required: false, // Optional field
//   },
// }, {
//   timestamps: true, // Automatically manage createdAt and updatedAt fields
// });

// // Create the Booking model from the schema
// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;

const mongoose = require('mongoose');

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: Ensure each email is unique
    match: /.+\@.+\..+/ // Basic email validation
  },
  date: {
    type: Date,
    required: true,
  },
  time: { // New field for time
    type: String,
    required: true, // Make it required if you want the user to always provide a time
  },
  message: {
    type: String,
    required: false, // Optional field
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Create the Booking model from the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
