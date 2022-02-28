import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">| Search |</Link> {""}
        <Link to="/news">| News | </Link> {""}
        <Link to="/top10">| Top 10 |</Link> {""}
      </div>
    </nav>
  );
}

export default Navbar;
