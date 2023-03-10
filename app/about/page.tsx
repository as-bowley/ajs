import Image from "next/image";
import aboutimg from "../../public/static/images/aboutimg.jpeg";

export default function Page() {
  return (
    <section className="grid lg:grid-cols-2 justify-between items-middle z-20 box-border gap-2 p-2 my-10">
      <div className="flex flex-col max-w-prose">
        <h1 className="text-3xl font-bold border-b-2 border-blue-500">About</h1>
        <p className="my-5 text-lg font-light mr-4">
          Hello, my name is Jim and I am an Auto electrician with over 5 years
          of experience in the field. I specialise in new vehicle installations
          and vehicle safety systems.
          <br></br>
          <br></br>I have a strong passion for all things automotive and am
          constantly staying up to date on the latest technologies and
          techniques in the industry. I pride myself on providing top-notch
          service and delivering reliable solutions to my clients.
          <br></br>
          <br></br>
          If you are in need of any auto electrical services, don&apos;t
          hesitate to give me a call. I am confident that I can help you find
          the right solution for your vehicle.
        </p>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <Image
          src={aboutimg}
          alt=""
          className="w-auto rounded"
          height={350}
        ></Image>
      </div>
    </section>
  );
}
