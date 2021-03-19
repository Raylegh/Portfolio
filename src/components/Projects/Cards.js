import { app } from "../../base";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Cards = () => {
  const [projects, setProjects] = useState([]);
  const storageRef = app.storage().ref("images");

  const displayImage = (imageRef) => {
    imageRef.getDownloadURL().then(function (url) {
      setProjects((projects) => [...projects, url]);
    });
  };

  useEffect(() => {
    storageRef.listAll().then(function (result) {
      result.items.forEach(function (imageRef) {
        displayImage(imageRef);
      });
    });
  }, []);

  return (
    <>
      {projects && (
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
            {/* <Card image={project1} imagetype="Stylisim" title="Fucking Young" /> */}
            {projects.map((project) => {
              return (
                <Card
                  key={uuidv4()}
                  image={project}
                  imagetype="Stylisim"
                  title="Fucking Young"
                />
              );
            })}
          </div>
        </div>
      )}
    </>
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
