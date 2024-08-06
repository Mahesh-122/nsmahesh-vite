import {useContext} from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./project.css"; // Import your stylesheet if you have one
import {DiscriptionSection, greeting} from "../../portfolio";
import ProjectCard from "../../components/card/ProjectCard";
import {projects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const Project = ({ openModal, setOpenModal }) => {
  const {isDark} = useContext(StyleContext);
  if ((!DiscriptionSection.display, !greeting.displayGreeting)) {
    return null;
  }
  return (
    <div className={isDark ? "dark-menu container" : "container"} id="works-section">
      <div className="wrapper">
        <div className="title">Projects And Freelance</div>
        <div className="desc">
          I have worked on a wide range of projects. From website to web apps. Here are some of my projects.
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

// PropTypes validation
Project.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    project: PropTypes.object // or specify the shape of the project object if known
  }).isRequired, // Ensure openModal is a required object with a specific shape
  setOpenModal: PropTypes.func.isRequired, // Ensure setOpenModal is a required function
};



export default Project;
