import { app } from "../../base";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const Cards = ({ projectClick, setProjectClick, setIsLoading, isLoading }) => {
  const history = useHistory();
  const url = history.location.pathname;

  const [projects, setProjects] = useState([]);
  const storageRef = app.storage().ref("images/project1");

  const displayImage = (imageRef) => {
    imageRef.getDownloadURL().then(function (url) {
      setProjects((projects) => [...projects, url]);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    storageRef.listAll().then(function (result) {
      result.items.forEach(function (imageRef) {
        displayImage(imageRef);
      });
    });
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const handleRemoveImage = (e) => {
    if (e.target.classList.contains("modal")) {
      setProjectClick("");
    }
  };

  return (
    <>
      {!isLoading && (
        <div className="card-section">
          <div className="title-center">
            <div className="card-title">
              <h2>
                Fucking <span>Young</span>
              </h2>
              <div className="line" />
            </div>
          </div>
          <div className="card-container card-page-container">
            {/* <Card image={project1} imagetype="Stylisim" title="Fucking Young" /> */}
            {projects.map((project) => {
              return (
                <Card
                  key={uuidv4()}
                  image={project}
                  setProjectClick={setProjectClick}
                />
              );
            })}
          </div>
          <div
            onClick={handleRemoveImage}
            className={`modal ${projectClick !== "" ? "modal-open" : ""}`}
          >
            <img
              className={`${projectClick !== "" ? "img-open" : ""}`}
              src={projectClick}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

const Card = ({ image, setProjectClick }) => {
  const handleImage = () => {
    setProjectClick(image);
  };

  return (
    <div className="card" onClick={handleImage}>
      <img src={image} alt="" />
    </div>
  );
};

export default Cards;
