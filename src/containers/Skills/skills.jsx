import {useContext} from "react";
import {DiscriptionSection, greeting, skills} from "../../portfolio";
import "./skills.css";
import StyleContext from "../../contexts/StyleContext";

const Skills = () => {
  const {isDark} = useContext(StyleContext);
  if ((!DiscriptionSection.display, !greeting.displayGreeting)) {
    return null;
  }
  return (
    <div className={isDark ? "dark-menu container" : "container"} id="skills-section">
      <div className="wrapper">
        <div className="title">Skills</div>
        <div className="desc">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <h2 className={isDark ? "dark-menu skill-title" : "skill-title"}>{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item, itemIndex) => (
                  <div className={isDark ? "dark-menu skill-item" : "skill-item"} key={itemIndex}>
                    <img
                      className="skill-image"
                      src={item.image}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
