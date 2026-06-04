import { FaCalendarAlt } from "react-icons/fa";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background">
        <img
          src="/uñasbanner.jpeg"
          alt="Manicura y peluquería"
          className="about-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>
          Salón de Peluquería y Manicura en<span>Maipú</span>
        </h1>

        <p>
          Descubre una experiencia única en peluquería y manicura profesional. 
          Cuidamos tu cabello, tus uñas y cada detalle de tu estilo con atención personalizada, productos de calidad y resultados impecables.
        </p>

        <div className="hero-buttons">
          <a href="#reserva" className="hero-button hero-button-primary">
            <FaCalendarAlt size={22} />
            Reserva tu Cita
          </a>

          <a href="#servicios" className="hero-button hero-button-outline">
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
};