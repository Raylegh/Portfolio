//Images
import MainImage from "../images/test.jpg";

function AboutMe() {
  return (
    <div className="main-section">
      <div class="main-about">
        <h3>Hi I'm Cristina</h3>
        <h2>
          Fashion<span> Designer</span> & Digital <span>Marketing</span>{" "}
        </h2>
        <p>
          I'm a disciplinary designer, with great pasion for fashion design and
          stylism. Currently discovering my love for digital marketing.
        </p>
        <button>Projects</button>
      </div>
      <div className="main-photo">
        <img src={MainImage} alt="main image" />
      </div>
    </div>
  );
}

export default AboutMe;
