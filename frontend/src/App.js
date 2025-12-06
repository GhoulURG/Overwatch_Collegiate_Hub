import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bracket from './Bracket';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bracket" element={<Bracket />} />
      </Routes>
    </Router>
  );
}

export default App;
