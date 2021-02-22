//Images
import AboutImage from "../../images/about.png";
import MarketingIcon from "../../images/marketing.png";
import FashionIcon from "../../images/fashion.png";

function AboutSection({ forwardedRef }) {
  return (
    <div ref={forwardedRef} className="about-main">
      <div className="about-description">
        <div className="about-tittle">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Cristina Blanco Fábrega, 1996, Barcelona, España. Diseñadora de Moda
            y Accesorios, Estilista en Publicidad, Artes Escénicas y
            Producciones, y actualemente también estudiante de Marketing Digital
            y Comercio Electónico.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <div className="about-icon">
              <img src={MarketingIcon} alt="marketing" />
              <h4>Marketing</h4>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              rerum laboriosam nostrum magnam quia recusandae animi voluptatem
              repudiandae ut inventore voluptas! Cupiditate vel voluptas esse
              eligendi optio qui accusantium quasi?
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <img src={FashionIcon} alt="fashion" />
              <h4>Design</h4>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              rerum laboriosam nostrum magnam quia recusandae animi voluptatem
              repudiandae ut inventore voluptas! Cupiditate vel voluptas esse
              eligendi optio qui accusantium quasi?
            </p>
          </div>
        </div>
      </div>
      <div className="about-photo">
        <img src={AboutImage} alt="about" />
      </div>
    </div>
  );
}

export default AboutSection;
