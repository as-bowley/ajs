import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import heroimg from "../public/static/images/heroimg.jpeg";
import phoneicon from "../public/static/images/phoneicon.png";

export default function HomePage() {
  return (
    <section className="flex flex-1 justify-between items-middle z-20 box-border h-full my-10 lg:h-auto ">
      <div className="flex flex-col max-w-lg p-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-5">
          Your Leicester Based Auto Electrician
        </h1>
        <p className="my-5 text-xl font-light">
          We offer Installations, Fault Finding & Repairs!
          <br></br>
          <br></br>
          Whether you need cameras fitting on your HGV fleet or a dashcam on
          your day to day car, I can help!
        </p>
        <div className="flex">
          <button className="px-3 py-2 m-2 ml-0 cursor-pointer text-white bg-blue-500 rounded font-bold text-xl  hover:bg-blue-600">
            <Link href={"/services"}>See Services</Link>
          </button>
          <button className="flex items-center px-3 py-2 m-2 ml-0 cursor-pointer text-white bg-blue-500 rounded font-bold text-xl  hover:bg-blue-600 lg:hidden">
            <Image
              src={phoneicon}
              alt=""
              className="mr-2 group-hover:animate-wiggle"
            ></Image>
            <Link href={"/services"}>Call now</Link>
          </button>
        </div>
      </div>
      <div className="hidden p-4 lg:block">
        <Image src={heroimg} alt="" className="w-auto h-max rounded"></Image>
      </div>
    </section>
  );
}
