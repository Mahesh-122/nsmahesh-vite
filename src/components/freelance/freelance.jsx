import React, {useContext} from "react";
import "./project.css"; // Import your stylesheet if you have one
import {DiscriptionSection, greeting} from "../../portfolio";
import ProjectCard from "../../components/card/ProjectCard";
import {projects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const Freelance = ({openModal, setOpenModal}) => {
  const {isDark} = useContext(StyleContext);
  if ((!DiscriptionSection.display, !greeting.displayGreeting)) {
    return null;
  }
  return (
    <div className={isDark ? "dark-menu container" : "container"} id="works-section">
      <div className="wrapper">
        <div className="title">Projects</div>
        <div className="desc">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>
        <div className="card-container">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freelance;
