import "./About.css";

export const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/imagen6.png"
            alt="Barbería"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2>
            Más que una manicura, <span>una experiencia</span>
          </h2>

          <p>
            Fundado con pasión por la belleza y el cuidado personal, nuestro salón es un
            espacio pensado para quienes buscan sentirse bien, renovar su estilo y disfrutar
            de una experiencia especial.
          </p>

          <p>
            Nos enorgullecemos de ofrecer un servicio cercano y profesional en un ambiente
            cómodo, donde puedes relajarte, recibir una atención personalizada y salir
            luciendo tu mejor versión.
          </p>

          <p>
            Nuestro equipo está dedicado a cuidar cada detalle, desde el diseño de uñas
            hasta el cabello, para resaltar tu estilo con delicadeza, técnica y buen gusto.
          </p>
        </div>
      </div>
    </section>
  );
};