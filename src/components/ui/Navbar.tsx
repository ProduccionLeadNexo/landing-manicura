import { NavLink } from "./NavLink";
import "./Navbar.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          <img src="/logo.png" alt="Salón de manicura y peluquería" />
        </a>

        <nav className="navbar-menu">
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#reserva">Reservar</NavLink>
          <NavLink href="#ubicacion">Ubicación</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </nav>

        <div className="navbar-actions">
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

          <a href="#reserva" className="navbar-button">
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
};