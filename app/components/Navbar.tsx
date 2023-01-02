"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/static/images/1.png";
import phoneicon from "../../public/static/images/phoneicon.png";

export default function Navbar() {
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <header className="w-full z-10 mb-10">
      <nav className="flex h-auto justify-between items-center mt-4">
        <Image src={logo} width={200} alt="" />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 text-lg font-light md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 ">
            <li className="p-2 m-2">
              <Link
                className={`cursor-pointer hover:text-gray-500 ${
                  currentLink === 0 ? "border-b-2 border-blue-500" : ""
                }`}
                href={"/"}
                onClick={() => setCurrentLink(0)}
              >
                Home
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                className={`cursor-pointer hover:text-gray-500 ${
                  currentLink === 1 ? "border-b-2 border-blue-500" : ""
                }`}
                href={"/about"}
                onClick={() => setCurrentLink(1)}
              >
                About
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                className={`cursor-pointer hover:text-gray-500 ${
                  currentLink === 2 ? "border-b-2 border-blue-500" : ""
                }`}
                href={"/services"}
                onClick={() => setCurrentLink(2)}
              >
                Services
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                className={`cursor-pointer hover:text-gray-500 ${
                  currentLink === 3 ? "border-b-2 border-blue-500" : ""
                }`}
                href={"contact"}
                onClick={() => setCurrentLink(3)}
              >
                Contact
              </Link>
            </li>
            <li className="group flex items-center px-3 py-2 m-2 mr-0 cursor-pointer text-white bg-blue-500 rounded font-bold hover:bg-blue-600">
              <Image
                src={phoneicon}
                alt=""
                className="mr-2 group-hover:animate-wiggle"
              ></Image>
              Call now
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
