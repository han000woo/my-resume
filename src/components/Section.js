import React from "react";
import "../css/Section.css"; // 섹션 전용 스타일

const Section = ({ title, content, type }) => {
  const renderContent = () => {
    switch (type) {
      case "summary":
        return (
          <div className="summary">
            {content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        );
      case "skills":
        // case 'skills': in your component
        return (
          <div className="core-skills-hexagon-container">
            {content.map((item, index) => (
              <>
                {/* 3번째 아이템 다음에 줄바꿈 역할의 빈 div 추가 */}
                {index === 2 && <div className="break"></div>}
                {index === 5 && <div className="break"></div>}
                <div key={index} className="core-skill-hexagon">
                  {/* 각 역량에 맞는 아이콘을 <i> 태그로 다시 변경 */}
                  {index === 0 && <i className="fas fa-code"></i>}
                  {index === 1 && <i className="fas fa-database"></i>}
                  {index === 2 && <i className="fas fa-chart-bar"></i>}
                  {index === 3 && <i className="fas fa-shield-alt"></i>}
                  {index === 4 && <i className="fa-brands fa-react"></i>}
                  {index === 5 && <i className="fa-solid fa-map"></i>}
                  {index === 6 && <i className="fa-brands fa-github"></i>}
                  <p>{item}</p>
                </div>
              </>
            ))}
          </div>
        );
      case "tags":
        return (
          <div className="skills-list">
            {content.map((item, index) => (
              <span key={index} className="skill-tag">
                {item}
              </span>
            ))}
          </div>
        );
      case "projects":
        return (
          <div className="portfolio-grid">
            {content.map((project, index) => (
              <div key={index} className="project-item card">
                <h3>{project.title}</h3>
                <p className="project-info">
                  <i className="fas fa-calendar-alt"></i> {project.date}
                </p>
                <p className="project-info">
                  <i className="fas fa-users"></i> {project.team}
                </p>

                {Array.isArray(project.description) ? (
                  <ul className="project-description">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="project-description">{project.description}</p>
                )}

                <p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    프로젝트 링크
                  </a>
                </p>
              </div>
            ))}
          </div>
        );
      case "history":
        return (
          <div className="history-list">
            {content.map((item, index) => (
              <div key={index} className="experience-item card">
                <h3>{item.title}</h3>
                <p className="experience-date">{item.date}</p>
                <ul>
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="history-list">
            {content.map((item, index) => (
              <div key={index} className="education-item card">
                <h3>{item.school}</h3>
                <p>{item.major}</p>
                <p>{item.period}</p>
                <p>{item.gpa}</p>
              </div>
            ))}
          </div>
        );
      case "certificate":
        return (
          <div className="history-list">
            {content.map((item, index) => (
              <div key={index} className="certificate-item card">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section">
      <h2>{title}</h2>
      {renderContent()}
    </section>
  );
};

export default Section;
