import React, { useEffect, useState } from 'react';

function Bracket() {
  const [games, setGames] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/games")
    .then(res => res.json())
    .then(data => setGames(data))
    .catch(err => console.error(err));
}, []);

  return (
    <div>
      <h1>NACE 2025 Homecoming Bracket</h1>
      {games.map(game => (
        <div key={game._id}>
          {game.round} - Match {game.matchNumber}: {game.homeTeam} vs {game.awayTeam} ({new Date(game.date).toLocaleString()})
        </div>
      ))}
    </div>
  );
}

export default Bracket;
