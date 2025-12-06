const mongoose = require('mongoose');
const Game = require('../models/Game');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected for seeding'))
    .catch(err => console.error(err));

const games = [
    { round: 'Quarterfinal', matchNumber: 1, homeTeam: 'Illinois State', awayTeam: 'Ball State Red', date: new Date('2025-11-09T19:00:00'), conference: 'NACE' },
    { round: 'Quarterfinal', matchNumber: 2, homeTeam: 'Cumberland', awayTeam: 'Texas A&M-San Antonio', date: new Date('2025-11-09T17:35:00'), conference: 'NACE' },
    { round: 'Quarterfinal', matchNumber: 3, homeTeam: 'St. Clair', awayTeam: 'Briar Cliff', date: new Date('2025-11-09T17:35:00'), conference: 'NACE' },
    { round: 'Quarterfinal', matchNumber: 4, homeTeam: 'Bellevue', awayTeam: 'North Carolina State Red', date: new Date('2025-11-09T17:35:00'), conference: 'NACE' },
    { round: 'Semifinal', matchNumber: 1, homeTeam: 'Illinois State', awayTeam: 'Cumberland', date: new Date('2025-11-15T18:30:00'), conference: 'NACE' },
    { round: 'Semifinal', matchNumber: 2, homeTeam: 'St. Clair', awayTeam: 'Bellevue', date: new Date('2025-11-15T17:00:00'), conference: 'NACE' },
    { round: 'Final', matchNumber: 1, homeTeam: 'Illinois State', awayTeam: 'St. Clair', date: new Date('2025-11-16T17:30:00'), conference: 'NACE' },
];

async function seed() {
    try {
        await Game.deleteMany({});
        console.log('Existing games cleared');

        await Game.insertMany(games);
        console.log('Bracket seeded successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seed();
