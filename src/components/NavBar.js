import { Link } from "react-router-dom";
import logo from "../Images/M.png";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt=" " height="45px"></img>{" "}
        </Link>{" "}
        {""}
        <Link to="/about">| About| </Link> {""}
        <Link to="/companyinfo">| Company Info | </Link> {""}
        <Link to="/price">| Price |</Link> {""}
        <Link to="/trending">| Trending |</Link> {""}
      </div>
    </nav>
  );
}

export default Navbar;
