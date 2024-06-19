import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">MyMarket</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <h1>
        <Link to="/cart">
          <MdOutlineShoppingCart />
        </Link>
      </h1>
    </nav>
  );
};

export default Navbar;
