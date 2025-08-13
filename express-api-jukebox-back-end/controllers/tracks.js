const Track = require('../models/tracks.js')
const express = require('express')
const router = express.Router();

//=========================CREATE=========================
router.post('/', async (req, res) => {
    console.log('New track added');
    try {
        const newTrack = await Track.create(req.body);
        res.status(201).json(newTrack);
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
});



//========================= READ =========================




//=========================UPDATE=========================




//=========================DELETE=========================

module.exports = router;