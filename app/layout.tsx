import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/static/images/1.png";
import phoneicon from "../public/static/images/phoneicon.png";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="flex flex-col h-screen 
     mx-[8%] box-border"
      >
        <div
          className="-z-10 absolute overflow-hidden right-0 w-0 max-h-full 
   border-l-[100vh] border-l-transparent
   border-b-[100vh] border-b-amber-200
   "
        ></div>
        <header className="w-full z-10 mb-10">
          <nav className="flex h-auto justify-between items-center mt-4">
            <Image src={logo} width={200} alt="" />
            <ul className="flex flex-row justify-between text-xl font-light">
              <li className="p-2 m-2">
                <Link
                  className="cursor-pointer hover:text-gray-500 active:border-blue-500"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="p-2 m-2">
                <Link className="cursor-pointer" href={"/about"}>
                  About
                </Link>
              </li>
              <li className="p-2 m-2">
                <Link className="cursor-pointer" href={"/services"}>
                  Services
                </Link>
              </li>
              <li className="p-2 m-2">
                <Link className="cursor-pointer" href={"contact"}>
                  Contact
                </Link>
              </li>
              <li className="flex items-center px-3 py-2 m-2 mr-0 cursor-pointer text-white bg-blue-500 rounded font-bold">
                <Image src={phoneicon} alt="" className="mr-2"></Image>
                Call now
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
