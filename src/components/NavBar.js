import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/home">| Home| </Link> {""}
        <Link to="/companyinfo">| Company Info | </Link> {""}
        <Link to="/price">| Price |</Link> {""}
      </div>
    </nav>
  );
}

export default Navbar;
