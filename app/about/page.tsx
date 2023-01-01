import Image from "next/image";
import aboutimg from "../../public/static/images/aboutimg.png";

export default function Page() {
  return (
    <section className="flex flex-1 justify-between items-middle z-20 box-border my-10">
      <div className="flex flex-col max-w-lg p-4 max-w-prose">
        <h1 className="text-3xl font-bold border-b-2 border-blue-500">
          About AJS Auto Electrical
        </h1>
        <p className="my-5 text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie
          lorem erat, ut vulputate erat ornare quis. Nulla aliquam porta mauris,
          eget aliquet erat tincidunt vel. Duis at egestas tortor. Mauris eu
          justo et est laoreet vestibulum ut nec purus. Sed lobortis, urna sit
          amet interdum laoreet, ante lectus porttitor massa, non gravida justo
          nisi fermentum dui. Sed lobortis molestie tellus imperdiet feugiat.
          Quisque tincidunt leo in nibh gravida, eu porttitor nisl ullamcorper.
          Vestibulum ultricies facilisis diam aliquam finibus. Fusce tempor
          mauris vitae ligula efficitur, id fringilla ligula dictum. Integer
          lorem dolor, accumsan pretium nisi eget, vehicula tincidunt tortor.
          Pellentesque nec sem id justo ullamcorper aliquet eget id ligula. Nam
          sollicitudin semper quam, at tincidunt diam convallis sit amet.
        </p>
      </div>
      <div className="p-4">
        <Image src={aboutimg} alt="" className="w-auto h-300 rounded"></Image>
      </div>
    </section>
  );
}
