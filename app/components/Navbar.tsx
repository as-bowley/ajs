"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/static/images/1.png";
import phoneicon from "../../public/static/images/phoneicon.png";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-[8%] py-2.5 mb-0 lg:mb-6 ">
      <div className="container flex flex-wrap items-center justify-between ">
        <Link href={"/"} className=" flex items-center">
          <Image src={logo} alt="AJS Logo" width={200} />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden hover:bg-gray-100 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-10 h-10 bg-transparent rounded fill-black"
            aria-hidden="true"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "relative" : "hidden"
          }  w-screen e lg:rounded-lg lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul
            className={` ${
              isOpen ? "absolute top-0 right-0" : ""
            } flex flex-col items-stretch p-4 shadow-md border rounded-lg w-full lg:mt-4 font-light bg-white lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium lg:border-0 lg:items-center lg:shadow-none lg:border-none`}
          >
            <li>
              <NavLink
                href={"/"}
                name={"Home"}
                setIsOpen={() => setIsOpen(false)}
              ></NavLink>
            </li>
            <li>
              <NavLink
                href={"/about"}
                name={"About"}
                setIsOpen={() => setIsOpen(false)}
              ></NavLink>
            </li>
            <li>
              <NavLink
                href={"/services"}
                name={"Services"}
                setIsOpen={() => setIsOpen(false)}
              ></NavLink>
            </li>
            <li>
              <NavLink
                href={"/contact"}
                name={"Contact"}
                setIsOpen={() => setIsOpen(false)}
              ></NavLink>
            </li>
            <li className="group  w-auto px-3 py-2 mt-2 lg:m-2 mr-0 cursor-pointer text-white bg-blue-500 rounded hover:bg-blue-600">
              <a
                href="tel:07986965153"
                className="flex items-center justify-center py-2 pl-3 pr-4  text-lg font-bold rounded lg:hover:bg-transparent lg:border-0  lg:p-0"
              >
                <Image
                  src={phoneicon}
                  alt=""
                  className="mr-2 group-hover:animate-wiggle"
                ></Image>
                Call now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
