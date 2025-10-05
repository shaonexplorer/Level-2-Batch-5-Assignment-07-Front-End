"use client";

import Image, { StaticImageData } from "next/image";
import { FaLink } from "react-icons/fa";

interface IProps {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  source_code_link: string;
  website_link: string;
}

function ProjectCard({ item }: { item: IProps }) {
  return (
    <div className="w-[360px] h-[455px] rounded-2xl bg-tertiary01 p-5 flex flex-col ">
      <div className="relative w-full h-[230px]">
        {/* website link */}
        <div
          onClick={() => window.open(item.website_link, "_blank")}
          className="absolute top-3 right-[70px] black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <FaLink className="text-white w-1/2 h-1/2" />
        </div>
        {/* github link */}
        <div
          onClick={() => window.open(item.source_code_link, "_blank")}
          className="absolute top-3 right-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/github.png"
            alt="source code"
            width={20}
            height={20}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        {/* website image */}
        <Image
          src={item.image}
          width={320}
          height={230}
          alt="pic"
          className="w-full h-full object-cover rounded-2xl"
        ></Image>
      </div>
      <div className="mt-5 flex flex-col ">
        <h1 className="text-white font-bold text-[24px]">{item.name}</h1>
        <p className="mt-2 text-secondary01 text-[14px]">{item.description}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {item.tags.map(
          (tag: { name: string; color: string }, index: number) => (
            <p
              className={`text-[14px] ${tag.color}`}
              key={`${tag.name} - ${index}`}
            >
              #{tag.name}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
