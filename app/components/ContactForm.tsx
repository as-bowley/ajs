"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [hasFormBeenSent, setHasFormBeenSent] = useState(false);
  async function handleOnSubmit(e: FormEvent<HTMLFormElement> | any) {
    e.preventDefault();
    const formData = {};
    Array.from<HTMLCollectionOf<HTMLElement>>(e.currentTarget.elements).forEach(
      (field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      }
    );
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    setHasFormBeenSent(true);
  }

  return (
    <form
      className="my-5 min-w-full"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <p className="w-full">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        ></input>
      </p>
      <p className="w-full">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        ></input>
      </p>
      <p className="w-full">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone number
        </label>
        <input
          type="tel"
          name="number"
          className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        ></input>
      </p>
      <p className="w-full">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          className=" no-resize appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-36 resize-none"
        ></textarea>
      </p>
      <p className="w-full">
        <button
          disabled={hasFormBeenSent}
          className="shadow bg-blue-500 hover:bg-blue-600 focus:border-2 focus:border-blue-300 focus:outline-none text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
        >
          Submit
        </button>
        <span className="pl-4 text-green-600">
          {hasFormBeenSent ? "Message sent!" : ""}
        </span>
      </p>
    </form>
  );
}
