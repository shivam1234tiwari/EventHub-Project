import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Event<span>Hub</span>
        </Link>

        {/* Menu */}
        <nav className={open ? "nav-links active" : "nav-links"}>
          <a href="/#events" onClick={() => setOpen(false)}>
            Events
          </a>

          <a href="/#categories" onClick={() => setOpen(false)}>
            Categories
          </a>

          <a href="/#organizers" onClick={() => setOpen(false)}>
            Organizers
          </a>

          <a href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

          <Link to="/list-event" className="event-btn">
            List Event
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}