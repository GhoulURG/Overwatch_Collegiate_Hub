const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    round: { type: String, enum: ['Quarterfinal', 'Semifinal', 'Final'], required: true },
    matchNumber: { type: Number, required: true },
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Scheduled', 'Completed'], default: 'Scheduled' },
    conference: { type: String, enum: ['NACE'], required: true },
});

module.exports = mongoose.model('Game', gameSchema);
