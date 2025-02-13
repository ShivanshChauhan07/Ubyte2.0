import React, { useEffect, useState } from "react";
import projectData from "../utils/projectData";
import { data } from "react-router";
import Loading from "./Loading";
//import ProjectCard from "../components/project/ProjectCard";

const ProjectCard = React.lazy(() =>
  import("../components/project/ProjectCard")
);
const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [500]);
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section>
        <div className="text-center leading-loose p-2 font-['Manrope'] my-10 ">
          <h1 className="font-semibold text-5xl">Projects</h1>
          <p className="text-[#60697b] font-medium my-6 text-lg">
            Check out some of our awesome projects with <br /> creative ideas
            and great design.
          </p>
        </div>
        <div className=" flex flex-col gap-y-16 mb-10">
          {projectData.map((data, index) => {
            let flag = false;
            if (index % 2) {
              flag = true;
              return <ProjectCard key={index} inverted={flag} {...data} />;
            } else {
              flag = false;
              return <ProjectCard key={index} inverted={flag} {...data} />;
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
