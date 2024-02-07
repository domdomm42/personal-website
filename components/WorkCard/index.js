import React from "react";

const WorkCard = ({ img, name, description, skills, onClick }) => {
  const getIconStyle = (skillName) => {
    switch (skillName) {
      case "Python 3":
        return { width: "23px", height: "25px" };
      case "React":
        return { width: "30px", height: "27px" };
      case "FastAPI":
        return { width: "30px", height: "24px" };
      case "Azure":
        return { width: "20px", height: "20px" };
      case "PostgreSQL":
        return { width: "25px", height: "25px" };
      case "Java":
        return { width: "25px", height: "25px" };
      case "HTML":
        return { width: "25px", height: "25px" };
      case "CSS":
        return { width: "25px", height: "25px" };
      case "Javascript":
        return { width: "25px", height: "25px" };
      default:
        return { width: "30px", height: "30px", objectFit: "contain" };
    }
  };

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div className="skills flex flex-wrap mt-3">
        {skills.map((skill, index) => (
          <div key={index} className="skill flex items-center mr-4 mb-2">
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="mr-2"
                style={getIconStyle(skill.name)}
              />
            )}
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
