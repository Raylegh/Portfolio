import MainImage from "../../images/test2.jpg";

function MainSection({ buttRef }) {
  //Button scrolling
  const executeScroll = () => buttRef.current.scrollIntoView();
  // const executeScroll = () => {
  //   console.log(buttRef.current);
  // };

  return (
    <div className="main-section">
      <div className="main-about">
        <h3>Hi I'm Cristina</h3>
        <h2>
          Fashion<span> Designer</span> & Digital <span>Marketing</span>{" "}
        </h2>
        <p>
          I'm a disciplinary designer, with great pasion for fashion design and
          stylism. Currently discovering my love for digital marketing.
        </p>
        <button onClick={executeScroll}>Read More</button>
      </div>
      <div className="main-photo">
        <img src={MainImage} alt="profile" />
      </div>
    </div>
  );
}

export default MainSection;
