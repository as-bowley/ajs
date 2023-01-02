"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/static/images/1.png";
import phoneicon from "../../public/static/images/phoneicon.png";

export default function ProtoNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" py-2.5 mb-6">
      <div className="container flex flex-wrap items-center justify-between ">
        <a href="#" className=" flex items-center">
          <Image src={logo} alt="AJS Logo" width={200} />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
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
            } flex flex-col items-stretch p-4 rounded-lg w-full lg:mt-4 font-light bg-white lg:flex-row lg:space-x-8 lg:text-sm lg:font-medium lg:border-0`}
          >
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-lg font-light text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="block py-2 pl-3 pr-4 text-lg font-light rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className="block py-2 pl-3 pr-4 text-lg font-light rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="block py-2 pl-3 pr-4 text-lg font-light rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                Contact
              </Link>
            </li>
            <li className="group  w-auto px-3 py-2 m-2 mr-0 cursor-pointer text-white bg-blue-500 rounded font-bold hover:bg-blue-600">
              <a className="flex items-center justify-center py-2 pl-3 pr-4 text-lg font-light rounded  lg:hover:bg-transparent lg:border-0  lg:p-0">
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
