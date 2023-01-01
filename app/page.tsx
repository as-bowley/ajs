import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import heroimg from "../public/static/images/heroimg.jpeg";

export default function HomePage() {
  return (
    <section className="flex flex-1 justify-between items-middle z-20 box-border my-10">
      <div className="flex flex-col max-w-lg p-4">
        <h1 className="text-5xl font-bold mb-5">
          Your Leicester Based Auto Electrician
        </h1>
        <p className="my-5 text-xl font-light">
          We offer Installations, Fault Finding & Repairs, Diagnostics and more!
          <br></br>
          <br></br>
          So, whether you need a new Dashcam installing or you need to know why
          the check engine light is on; AJS Auto Electrical can help!
        </p>
        <div>
          <button className="px-3 py-2 m-2 ml-0 cursor-pointer text-white bg-blue-500 rounded font-bold text-xl">
            <Link href={"/services"}>See Services</Link>
          </button>
        </div>
      </div>
      <div className="p-4">
        <Image src={heroimg} alt="" className="w-auto h-max rounded"></Image>
      </div>
    </section>
  );
}
