import { useEffect, useState } from 'react';
import axios from 'axios';

function Bracket() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Make sure the port matches your backend (5001)
    axios.get('http://localhost:5001/api/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <div>
      <h1>NACE 2025 Homecoming Bracket</h1>
      <ul>
        {games.map(game => (
          <li key={game._id}>
            {game.round} - Match {game.matchNumber}: {game.homeTeam} vs {game.awayTeam} ({new Date(game.date).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bracket;
