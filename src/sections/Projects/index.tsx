import Container from "@/components/Container";
import { Project } from "./data";
const Projects = () => {
  return (
    <div className="bg-[#22252C] w-full p-2 sm:p-10 pb-20" id="projects">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-3xl my-20">PROJECTS</h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Project.map((project: any, index) => (
            <div
              className="bg-[#303741] h-70 p-10 shadow-sm shadow-[#1DCBB2] rounded-sm"
              key={project.name + index}
            >
              <h1 className="text-[#1DCBB2] font-bold text-xl mb-3">
                {project.name}
              </h1>
              <span className="text-[#D9DCE3] font-thin text-sm">
                {project.date}
              </span>
              <h6 className="mt-10 text-[#1DCBB2]">Description:</h6>
              <p className="text-[#D9DCE3] ">{project.description}</p>
              <h6 className="mt-10 text-[#1DCBB2]">Tools:</h6>

              <p className="text-[#D9DCE3]">{project.tools}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
