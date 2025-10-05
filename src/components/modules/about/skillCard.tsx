import Image from "next/image";

function SkillsCard({ item }: { item: { name: string; icon: string } }) {
  return (
    <div className=" shadow-stone shadow-md">
      <div className="  flex flex-col justify-center items-center gap-2 w-full h-full">
        <Image
          src={item.icon}
          width={50}
          height={50}
          alt="icon"
          className="w-[50px] h-[50px]"
        ></Image>
        <p className="text-center text-secondary01"> {item.name}</p>
      </div>
    </div>
  );
}

export default SkillsCard;
