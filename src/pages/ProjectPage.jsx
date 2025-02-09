import React from "react";
//import ProjectCard from "../components/project/ProjectCard";

const ProjectCard = React.lazy(() =>
  import("../components/project/ProjectCard")
);
const ProjectPage = () => {
  return (
    <>
      <section>
        <div className="text-center leading-loose p-2 font-['Manrope'] my-10 ">
          <h1 className="font-semibold text-5xl">Projects</h1>
          <p className="text-[#60697b] font-medium my-6 text-lg">
            Check out some of our awesome projects with <br /> creative ideas
            and great design.
          </p>
        </div>
        <div>
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
