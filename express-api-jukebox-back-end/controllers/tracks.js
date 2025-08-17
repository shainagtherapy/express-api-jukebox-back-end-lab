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

router.get('/', async (req, res) => { //full index view
    try {
        const allTracks = await Track.find();
        res.status(200).json(allTracks);
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
});

router.get('/:trackId', async (req, res) => { //single track view
    try {
        const singleTrack = await Track.findById(req.params.trackId, req.body, {new:true})
        if(!singleTrack) {
            res.status(404);
            throw new Error('Track not found');
        }
        res.status(200).json(singleTrack);
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
})


//=========================UPDATE=========================

router.put('/:trackId', async (req, res) => {
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body);

        if (!updatedTrack) {
            res.status(404)
            throw new Error('Track not found.');
        }
        res.status(200).json(updatedTrack)
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
});


//=========================DELETE=========================

router.delete('/:trackId', async (req,res) => {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.trackId);
        if (!deletedTrack) {
            res.status(404);
            throw new Error('Track not found!');
        }
        res.status(200).json(deletedTrack);
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
})
module.exports = router;