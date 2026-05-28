import "./Trabajos.css";

const trabajos = [
  {
    id: 1,
    imagen: "/uñasnudeplateado.jpg",
    alt: "Diseño de uñas acrílicas en tonos nude y plateado",
  },

  {
    id: 2,
    imagen: "/balayage.avif",
    alt: "Manicura profesional con diseño personalizado",
   },
  
  {
    id: 3,
    imagen: "/uñaselegantes.jpg",
    alt: "Diseño de uñas elegantes en tonos rosados",
  },

 

 
];

export const Trabajos = () => {
  return (
    <section id="trabajos" className="trabajos-section">
      <div className="trabajos-overlay">
        <div className="trabajos-container">
          <span className="trabajos-subtitle">Galería</span>

          <h2>Algunos de nuestros trabajos</h2>

          <p className="trabajos-description">
            Conoce parte de nuestros diseños de manicura, creados con dedicación,
            estilo y atención a cada detalle.
          </p>

          <div className="trabajos-grid">
            {trabajos.map((trabajo) => (
              <div className="trabajo-card" key={trabajo.id}>
                <img src={trabajo.imagen} alt={trabajo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};