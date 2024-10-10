// // controllers/bookingController.js
// const Booking = require('../models/Booking');

// // Create a new booking
// exports.createBooking = async (req, res) => {
//   try {
//     const { fullName, email, date, message } = req.body;

//     const newBooking = new Booking({
//       fullName,
//       email,
//       date,
//       message,
//     });

//     await newBooking.save();
//     res.status(201).json({ message: 'Booking created successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error creating booking' });
//   }
// };

// // Get all bookings
// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching bookings' });
//   }
// };

// const Booking = require('../models/Booking');

// // Create a new booking
// exports.createBooking = async (req, res) => {
//   try {
//     const { fullName, email, date, time, message } = req.body; // Include time

//     // Create a new booking instance with time
//     const newBooking = new Booking({
//       fullName,
//       email,
//       date,
//       time, // Add time here
//       message,
//     });

//     await newBooking.save();
//     res.status(201).json({ message: 'Booking created successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error creating booking' });
//   }
// };

// // Get all bookings
// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching bookings' });
//   }
// };

const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { fullName, email, date, time, message } = req.body; // Include time

    // Check if the selected date and time is already booked
    const existingBooking = await Booking.findOne({ date, time });

    if (existingBooking) {
      return res.status(400).json({ message: 'Selected time slot is already booked.' });
    }

    // Create a new booking instance with time
    const newBooking = new Booking({
      fullName,
      email,
      date,
      time, // Add time here
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

// Get available time slots for a selected date
exports.getAvailableTimeSlots = async (req, res) => {
  try {
    const { date } = req.query; // Get the selected date from query parameters

    // Fetch all bookings for the selected date
    const bookings = await Booking.find({ date });

    // Extract booked time slots
    const bookedTimeSlots = bookings.map((booking) => booking.time);

    // Define all available time slots
    const allTimeSlots = [
      '10:00 AM',
      '11:00 AM',
      '12:00 PM',
      '01:00 PM',
      '02:00 PM',
      '03:00 PM',
      '04:00 PM',
      '05:00 PM',
      '06:00 PM',
    ];

    // Filter out booked time slots to get available time slots
    const availableTimeSlots = allTimeSlots.filter((slot) => !bookedTimeSlots.includes(slot));

    // Send back available time slots
    res.status(200).json({ availableTimeSlots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching available time slots' });
  }
};
