import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Houses from './pages/Houses';
import WeeklyProgress from './pages/WeeklyProgress';
import './App.css';
import AllCompleted from './pages/AllCompleted';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/houses" element={<Houses />} />
            {/* <Route path="/weekly" element={<WeeklyProgress />} /> */}
            <Route path="/all_completed" element={<AllCompleted />} />
          </Routes> */}
          Site under maintenance
        </div>
      </div>
    </Router>
  );
}

export default App;
