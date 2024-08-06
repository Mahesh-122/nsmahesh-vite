import './projectCard.css'; // Import your SCSS stylesheet if you have one
import PropTypes from "prop-types"; // Import PropTypes

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div className="card"
     onClick={() => setOpenModal({ state: true, project: project })}
     >
      <img className="image" src={project.image} alt="Project" />
      <div className="tags">
        {project.tags?.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="details">
        <div className="title">{project.title}</div>
        <div className="date">{project.date}</div>
        <div className="description">{project.description}</div>
      </div>
      <div className="members">
        {project.member?.map((member, index) => (
          <img key={index} className="avatar" src={member.img} alt="Member" />
        ))}
      </div>
      {/* <button className="button">View Project</button> */}
    </div>
  );
};
// PropTypes validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    member: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
      })
    ),
  }).isRequired, // Ensure project is a required object
  setOpenModal: PropTypes.func.isRequired, // Ensure setOpenModal is a required function
};

export default ProjectCard;
