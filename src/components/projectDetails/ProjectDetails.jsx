import {CloseRounded, GitHub, LinkedIn} from "@mui/icons-material";
import {Modal} from "@mui/material";
import "./projectDetails.css";
import PropTypes from "prop-types";

const ProjectDetails = ({openModal, setOpenModal}) => {
  const project = openModal?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({state: false, project: null})}
    >
      <div className="container_modal">
        <div className="wrapper_modal">
          <CloseRounded
            className="close-icon"
            onClick={() => setOpenModal({state: false, project: null})}
          />
          <img className="image" src={project?.image1} alt="Project" />
          <div className="title">{project?.title}</div>
          <div className="date">{project.date}</div>
          <div className="tags">
            {project?.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="desc">{project?.description}</div>
          {project.member && (
            <>
              <div className="label">Members</div>
              <div className="members">
                {project?.member.map((member, index) => (
                  <div key={index} className="member">
                    <img
                      className="member_image"
                      src={member.img}
                      alt="Member"
                    />
                    <div className="member-name">{member.name}</div>
                    <a
                      href={member.github}
                      target="new"
                      className="social-icon"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      className="social-icon"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="button-group">
            <a
              className="button dull"
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              className="button"
              href={project?.webapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};
// PropTypes validation
ProjectDetails.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    project: PropTypes.object // or specify the shape of the project object if known
  }).isRequired, // Ensure openModal is a required object with a specific shape
  setOpenModal: PropTypes.func.isRequired // Ensure setOpenModal is a required function
};
export default ProjectDetails;
