import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  console.log("Header.js");
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="App Logo"
          loading="lazy"
          src="static/images/logo.png"
        />
      </Link>
      <nav className="header__nav">
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/plp">
          Products
        </Link>
        <Link className="header__link" to="/login">
          Login
        </Link>
      </nav>
      <div className="header__cart">
        <img
          className="header__cart-icon"
          loading="lazy"
          src="static/images/cart.svg"
          alt="Cart Icon"
        />
        <span> 0 items</span>
      </div>
    </header>
  );
}
