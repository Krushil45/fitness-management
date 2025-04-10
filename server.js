// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static('public'));


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/elysius', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Contact Schema & Model
const ContactSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// Booking Schema & Model
const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    service: String,
    date: String,
    time: String,
    bookedAt: { type: Date, default: Date.now }
});
const Booking = mongoose.model('Booking', BookingSchema);

// Root route (optional redirect to home page)
app.get('/', (req, res) => {
    res.redirect('/ex.html');
});

// POST: Contact form
app.post('/api/contact', async (req, res) => {
    const { name, mobile } = req.body;

    if (!name || !mobile || !/^\d{10}$/.test(mobile)) {
        return res.status(400).json({ message: 'Valid name and 10-digit mobile number required' });
    }

    try {
        const contact = new Contact({ name, mobile });
        await contact.save();
        res.status(201).json({ message: '✅ Contact saved successfully!' });
    } catch (error) {
        console.error('❌ Error saving contact:', error);
        res.status(500).json({ message: 'Server error: Unable to save contact' });
    }
});

// POST: Booking form
app.post('/booking', async (req, res) => {
    const { name, email, phone, service, date, time } = req.body;

    if (!name || !email || !phone || !service || !date || !time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const booking = new Booking({ name, email, phone, service, date, time });
        await booking.save();

        // Send JSON response for frontend redirect
        res.status(201).json({ message: 'Booking successful' });
    } catch (err) {
        console.error('❌ Booking error:', err);
        res.status(500).json({ error: 'Server error: Unable to complete booking' });
    }
});
// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
