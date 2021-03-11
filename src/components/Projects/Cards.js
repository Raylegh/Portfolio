import project1 from "../../images/projects/project1.jpg";
import project2 from "../../images/projects/project2.jpg";
import project3 from "../../images/projects/project3.jpg";
import project4 from "../../images/projects/project4.jpg";

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
        <Card image={project1} imagetype="Stylisim" title="Fucking Young" />
        <Card image={project2} imagetype="Stylisim" title="Fucking Young" />
        <Card image={project3} imagetype="Stylisim" title="Fucking Young" />
        <Card image={project4} imagetype="Stylisim" title="Fucking Young" />
      </div>
    </div>
  );
};

const Card = ({ image, title, imagetype }) => {
  return (
    <div className="card">
      <img src={image} alt="style" />
      <div className="card-content">
        <h5>{imagetype}</h5>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Cards;
