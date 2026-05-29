import "./MapReviews.css";

export const MapReviews = () => {
  return (
    <section id="ubicacion" className="map-reviews-section">
      <div className="map-reviews-container">
        <div className="map-reviews-header">
          <span>Ubicación y reseñas</span>

          <h2>
            Encuéntranos y revisa nuestras <strong>opiniones</strong>
          </h2>

          <p>
            Visítanos en nuestro salón de belleza y revisa las reseñas reales de
            nuestros clientes directamente en Google Maps.
          </p>
        </div>

        <div className="map-reviews-grid">
          <div className="map-card">
            <div className="map-frame">
              <iframe
                title="Ubicación Salón Bertys"
                src="https://www.google.com/maps?q=Sal%C3%B3n%20Bertys%20Av.%20Parque%20Central%20Pte.%20707%20Maip%C3%BA%20Chile&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-info">
              <div>
                <h4>Salón Bertys</h4>
                <p>Av. Parque Central Pte. 707, Maipú, Chile</p>
              </div>

              <a
                href="https://www.google.com/maps/place/Sal%C3%B3n+Bertys/@-33.5586597,-70.7900168,17z/data=!3m1!4b1!4m6!3m5!1s0x9662dd09fab48c33:0x11caba355ff6c467!8m2!3d-33.5586597!4d-70.7900168!16s%2Fg%2F11fpmcddmp?hl=es-419&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Abrir mapa
              </a>
            </div>
          </div>

          <div className="reviews-card">
            <span>Reseñas reales</span>

            <h3>Mira lo que opinan nuestros clientes</h3>

            <p>
              Revisa las opiniones reales de Salón Bertys directamente en Google
              Maps y conoce la experiencia de otros clientes.
            </p>

            <div className="reviews-stars-wrapper">
              <img
                src="/Google-Review-Symbol.png"
                alt="Google Reviews"
                className="google-review-logo"
              />

              <small>Opiniones reales en Google Maps</small>
            </div>

            <div className="reviews-buttons">
              <a
                href="https://www.google.com/maps/place/Sal%C3%B3n+Bertys/@-33.5586597,-70.7900168,17z/data=!4m8!3m7!1s0x9662dd09fab48c33:0x11caba355ff6c467!8m2!3d-33.5586597!4d-70.7900168!9m1!1b1!16s%2Fg%2F11fpmcddmp?hl=es-419"
                target="_blank"
                rel="noopener noreferrer"
                className="reviews-button"
              >
                Ver reseñas en Google
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};