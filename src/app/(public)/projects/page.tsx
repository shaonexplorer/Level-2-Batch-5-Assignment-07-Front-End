import ProjectCard from "@/components/modules/projects/ProjectCard";
import { projectsDetails } from "@/const";

function ProjectPage() {
  return (
    <div className="w-screen sm:w-full bg-primary01 pt-[90px]" id="projects">
      <div className="sm:w-[1440px] mx-auto flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[36px] text-white font-bold ">Projects</h1>
        <span className="w-[263px] h-[1px] bg-white"></span>
        <p className="text-[18px] text-secondary01 mx-5 sm:mx-[270px] text-center mt-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
        <div className="mt-[40px] sm:w-[1140px] mx-auto flex-wrap flex flex-col justify-center sm:flex-row gap-7">
          {projectsDetails.map((item) => (
            <ProjectCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
