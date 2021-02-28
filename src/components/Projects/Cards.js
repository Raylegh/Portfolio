//import images
import project1 from "../../images/project1.jpg";
import project2 from "../../images/project2.jpg";
import project3 from "../../images/project3.jpg";
import project4 from "../../images/project4.jpg";

const Cards = () => {
  return (
    <div className="card-section">
      <div className="title-center">
        <div className="card-title">
          <h2>
            Latest <span>Works</span>
          </h2>
          <div className="line" />
        </div>
      </div>
      <div className="card-container">
        <Card image={project1} type="Stylisim" title="Fucking Young" />
        <Card image={project2} type="Stylisim" title="Wabi-Sabi" />
        <Card image={project3} type="Stylisim" title="Outsider" />
        <Card image={project4} type="Stylisim" title="Riot" />
      </div>
    </div>
  );
};

const Card = ({ image, title, type }) => {
  return (
    <div className="card">
      <img src={image} alt="style" />
      <div className="card-content">
        <h5>{type}</h5>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
