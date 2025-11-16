import React from "react";

function App() {
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
          <tr>
            <td>Team Alpha</td>
            <td>3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Team Beta</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
