import React, { useEffect, useState } from "react";

function App() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/standings")
      .then((res) => res.json())
      .then((data) => setStandings(data));
  }, []);

  return (
    <div>
      <h1>Overwatch Collegiate Hub - MVP</h1>
      <h2>Standings</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team, index) => (
            <tr key={index}>
              <td>{team.team}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
