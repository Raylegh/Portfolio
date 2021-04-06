import { app } from "../../base";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Cards = ({ isLoading, setIsLoading }) => {
  const [projects, setProjects] = useState([]);
  const storageRef = app.storage().ref("images");
  const project1 = storageRef.child("project1.jpg");
  const project2 = storageRef.child("project2.jpg");
  const project3 = storageRef.child("project3.jpg");
  const project4 = storageRef.child("project4.jpg");

  useEffect(() => {
    setIsLoading(true);
    const displayImage = async (imageRef, name, type) => {
      await imageRef.getDownloadURL().then(function (imgUrl) {
        setProjects((projects) => [
          ...projects,
          {
            name,
            type,
            img: imgUrl,
            url: "/projects/" + name,
          },
        ]);
      });
    };

    displayImage(project1, "Fucking Young1", "Stylisim");
    displayImage(project2, "Fucking Young2", "Stylisim");
    displayImage(project3, "Fucking Young3", "Stylisim");
    displayImage(project4, "Fucking Young4", "Stylisim");
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {!isLoading && (
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
            {projects.map((project) => {
              return (
                <Card
                  key={uuidv4()}
                  image={project.img}
                  url={project.url}
                  imagetype={project.type}
                  title={project.name}
                  setIsLoading={setIsLoading}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const Card = ({ image, title, imagetype, url, setIsLoading }) => {
  const handleLoading = () => {
    console.log(setIsLoading);
  };

  return (
    <div className="card" onClick={handleLoading}>
      <Link to={url}>
        <img src={image} alt="style" />
        <div className="card-content">
          <h5>{imagetype}</h5>
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
