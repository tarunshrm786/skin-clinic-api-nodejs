// routes/booking.js
const express = require('express');
const {
  createBooking,
  getAllBookings,
} = require('../controllers/bookingController');
const router = express.Router();

// Create a new booking
router.post('/', createBooking);

// Get all bookings
router.get('/', getAllBookings);

module.exports = router;
