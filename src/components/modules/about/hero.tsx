import Link from "next/link";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-[url(/herobg.png)] bg-cover bg-center bg-no-repeat w-screen sm:w-full h-screen   py-[25px] flex flex-col items-center justify-center gap-[20px]"
    >
      <h1 className="text-[40px] sm:text-[80px] text-white font-bold  ">
        Hi, I am <span className="text-primary">Abir</span>
      </h1>
      <span className="w-[240px] sm:w-[563px] h-[1px] bg-white"></span>
      <p className="text-[18px] sm:text-[30px] w-[300px] sm:w-[550px] text-center font-medium text-white-100">
        I develop full stack web applications using react, node.js, express,
        prisma postgreSQL and mongoDB.
      </p>
      <div className="sm:w-[465px] flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-[61px] mt-[40px]">
        <button className="w-[200px] rounded-[10px] text-white text-[24px] px-[35px] py-[10px] border border-primary">
          <Link href="/projects"> Projects</Link>
        </button>

        <button className="w-[200px] rounded-[10px] text-white text-[24px] px-[35px] py-[10px] bg-primary">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
