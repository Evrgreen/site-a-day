const ProjectCard = ({ title, lesson, number }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{lesson}</p>
      <style jsx>
        {`
          div {
            border: 3px solid black;
            display
          }
        `}
      </style>
    </div>
  );
};

export default ProjectCard;
