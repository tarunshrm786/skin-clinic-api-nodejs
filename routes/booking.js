// // routes/booking.js
// const express = require('express');
// const {
//   createBooking,
//   getAllBookings,
// } = require('../controllers/bookingController');
// const router = express.Router();

// // Create a new booking
// router.post('/', createBooking);

// // Get all bookings
// router.get('/', getAllBookings);

// module.exports = router;

const express = require('express');
const {
  createBooking,
  getAllBookings,
  getAvailableTimeSlots, // Import the new controller method
} = require('../controllers/bookingController');

const router = express.Router();

// Create a new booking
router.post('/', createBooking);

// Get all bookings
router.get('/', getAllBookings);

// Get available time slots for a selected date
router.get('/available-time-slots', getAvailableTimeSlots); // New route

module.exports = router;
