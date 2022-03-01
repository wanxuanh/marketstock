import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/trade">| Trade |</Link> {""}
        <Link to="/companyinfo">| Company Info | </Link> {""}
        <Link to="/home">| Home| </Link> {""}
      </div>
    </nav>
  );
}

export default Navbar;
