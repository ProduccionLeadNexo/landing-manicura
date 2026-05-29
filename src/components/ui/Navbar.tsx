import { useState } from "react";
import { NavLink } from "./NavLink";
import "./Navbar.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Salón de manicura y peluquería" />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <NavLink href="#inicio" onClick={closeMenu}>Inicio</NavLink>
          <NavLink href="#nosotros" onClick={closeMenu}>Nosotros</NavLink>
          <NavLink href="#servicios" onClick={closeMenu}>Servicios</NavLink>
          <NavLink href="#reserva" onClick={closeMenu}>Reservar</NavLink>
          <NavLink href="#ubicacion" onClick={closeMenu}>Ubicación</NavLink>
          <NavLink href="#contacto" onClick={closeMenu}>Contacto</NavLink>
        </nav>

        <div className={`navbar-actions ${menuOpen ? "active" : ""}`}>
          <div className="navbar-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>

          <a href="#reserva" className="navbar-button" onClick={closeMenu}>
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
};