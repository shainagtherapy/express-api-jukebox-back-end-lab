const mongoose = require('mongoose');

const tracksSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    artist: {
        type: 'string',
        required: 'true',
    }
});

const Track = mongoose.model('Track', tracksSchema);

module.exports = Track;