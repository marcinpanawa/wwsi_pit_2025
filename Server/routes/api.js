const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Deal = require('../models/Deal');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret_key'; // Hardcoded for this task

// =======================
// AUTH ENDPOINTS (JWT)
// =======================

// POST Register
router.post('/auth/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        user = new User({ name, email, password });
        await user.save();
        
        const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// POST Login
router.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// =======================
// DEALS ENDPOINTS
// =======================

// GET All Deals
router.get('/deals', async (req, res) => {
    try {
        const deals = await Deal.find({});
        res.json(deals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// =======================
// USERS ENDPOINTS
// =======================

router.get('/users', (req, res) => {
    res.json({ message: 'respond with a resource from api' });
});

module.exports = router;
