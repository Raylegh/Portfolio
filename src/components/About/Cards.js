//import images
import project1 from "../../images/project1.jpg";
import project2 from "../../images/project2.jpg";
import project3 from "../../images/project3.jpg";
import project4 from "../../images/project4.jpg";

const Cards = () => {
  return (
    <div className="card-section">
      <div className="card-title">
        <h2>
          Latest <span>Works</span>
        </h2>
      </div>
      <div className="card-container">
        <Card image={project1} title="Fucking Young" />
        <Card image={project2} title="Wabi-Sabi" />
        <Card image={project3} title="Outsider" />
        <Card image={project4} title="Riot" />
      </div>
    </div>
  );
};

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="style" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
