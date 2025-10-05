import { techStack } from "@/const";
import SkillsCard from "./skillCard";

function Skills() {
  return (
    <div className="mx-5 sm:mx-0 sm:w-[700px] flex flex-wrap gap-[70px] text-white items-center justify-center mt-[50px]">
      {techStack.map((item) => (
        <SkillsCard item={item} key={item.name} />
      ))}
    </div>
  );
}

export default Skills;
