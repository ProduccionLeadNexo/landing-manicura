import { FaCut, FaHandSparkles, FaWind } from "react-icons/fa";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      icon: <FaHandSparkles size={28} />,
      title: "Manicura Tradicional",
      description:
        "Servicio ideal para mantener tus uñas limpias, cuidadas y con un acabado delicado. Incluye limado, cuidado de cutículas y esmaltado a elección.",
      price: "$12.900",
    },
    {
      icon: <FaHandSparkles size={28} />,
      title: "Esmaltado Permanente",
      description:
        "Perfecto para lucir uñas impecables por más tiempo, con brillo intenso y mayor duración. Disponible en variedad de colores y estilos.",
      price: "$15.900",
    },
    {
      icon: <FaHandSparkles size={28} />,
      title: "Diseño de Uñas Personalizado",
      description:
        "Creamos diseños únicos según tu estilo, ocasión o preferencia. Desde detalles sutiles hasta decoraciones más llamativas y modernas.",
      price: "$20.900",
    },
    {
      icon: <FaCut size={28} />,
      title: "Corte de Cabello",
      description:
        "Cortes modernos y personalizados según tu rostro, estilo y preferencia. Te asesoramos para lograr un look fresco, cómodo y favorecedor.",
      price: "$15.900",
    },
    {
      icon: <FaCut size={28} />,
      title: "Coloración y Tintura",
      description:
        "Renueva tu imagen con coloración profesional, tonos naturales o cambios más atrevidos, cuidando siempre la salud y brillo de tu cabello.",
      price: "$18.900",
    },
    {
      icon: <FaWind size={28} />,
      title: "Peinados y Styling",
      description:
        "Peinados para eventos, ocasiones especiales o cambios de look. Trabajamos con dedicación para lograr un resultado elegante y duradero.",
      price: "$25.900",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-subtitle">Belleza y estilo</span>

          <h2>
            Nuestros <span>Servicios</span>
          </h2>

          <p>
            Ofrecemos servicios de peluquería y manicura profesional para cuidar
            tu imagen, realzar tu estilo y entregarte una experiencia cercana,
            moderna y personalizada.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <span className="service-price">{service.price}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};