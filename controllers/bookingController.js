// controllers/bookingController.js
const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { fullName, email, date, message } = req.body;

    const newBooking = new Booking({
      fullName,
      email,
      date,
      message,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};
