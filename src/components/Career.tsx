import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Professional <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern <span className="career-date">(15/07/25 - 15/08/25)</span></h4>
                <h5>InlighnX global pvt.ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Focused on full-stack development, API integration, and enhancing system reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Developer <span className="career-date">(15/12/23 - 15/01/24)</span></h4>
                <h5>Prodigy Infotech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Gained hands-on experience in web development following industry best practices.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: "8rem" }}>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>Vidyavardhini’s College of Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing Computer Engineering. Current CGPA: 6.67. Focused on
              Software Engineering and DBMS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC (XII)</h4>
                <h5>Paisa Fund English School</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed Higher Secondary Certificate with 85% marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
