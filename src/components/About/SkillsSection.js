const SkillsSection = () => {
  return (
    <div className="skill-section">
      <div className="skill-title">
        <h2>
          Main <span>Skills</span>
        </h2>
      </div>

      <div className="skills">
        <div className="skill">
          <div className="skill-info">
            <h4>Photoshop</h4>
            <div className="skill-val">
              <span>95%</span>
            </div>
          </div>
          <div className="skill-but">
            <div className="skill-hold">
              <div className="skill-bar">{/* WIDTH 90% */}</div>
            </div>
          </div>
        </div>

        {/* just for test */}

        <div className="skill">
          <div className="skill-info">
            <h4>Ilustrator</h4>
            <div className="skill-val">
              <span>95%</span>
            </div>
          </div>
          <div className="skill-but">
            <div className="skill-hold">
              <div className="skill-bar">{/* WIDTH 90% */}</div>
            </div>
          </div>
        </div>

        {/* just for test */}

        <div className="skill">
          <div className="skill-info">
            <h4>ilustrator</h4>
            <div className="skill-val">
              <span>95%</span>
            </div>
          </div>
          <div className="skill-but">
            <div className="skill-hold">
              <div className="skill-bar">{/* WIDTH 90% */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
