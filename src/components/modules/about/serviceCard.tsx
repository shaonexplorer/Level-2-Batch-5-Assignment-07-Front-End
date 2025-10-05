import Image, { StaticImageData } from "next/image";

interface IProps {
  item: {
    title: string;
    icon: StaticImageData;
  };
}

function ServiceCard({ item }: IProps) {
  return (
    <div className="w-[220px] h-[240px] green-pink-gradient rounded-[20px] p-[1px]">
      <div className="w-full h-full bg-tertiary01 rounded-[20px] flex flex-col items-center justify-center gap-10 px-5">
        <Image
          src={item.icon}
          width={64}
          height={64}
          className="w-16 h-16"
          alt="service"
        ></Image>
        <p className="text-white text-center font-bold text-[20px] tracking-wider">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
