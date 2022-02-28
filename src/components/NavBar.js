import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">| Trade |</Link> {""}
        <Link to="/companyinfo">| Company Info | </Link> {""}
        <Link to="/home">| Home| </Link> {""}
      </div>
    </nav>
  );
}

export default Navbar;
