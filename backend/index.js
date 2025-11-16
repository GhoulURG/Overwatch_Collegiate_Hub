const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API endpoint for standings
app.get("/api/standings", (req, res) => {
  res.json([
    { team: "Team Alpha", wins: 3, losses: 1 },
    { team: "Team Beta", wins: 2, losses: 2 }
  ]);
});

// Default route
app.get("/", (req, res) => {
  res.send("Overwatch Collegiate Hub Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
