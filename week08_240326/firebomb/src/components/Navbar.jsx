import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FocusFlow</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </nav>
  );
}

export default Navbar;