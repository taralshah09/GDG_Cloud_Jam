import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">☁️</span>
          <span className="logo-text">GDGOC Study Jams</span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard" className={`nav-link ${isActive('/leaderboard')}`}>
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/houses" className={`nav-link ${isActive('/houses')}`}>
              Houses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/weekly" className={`nav-link ${isActive('/weekly')}`}>
              Weekly Progress
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;