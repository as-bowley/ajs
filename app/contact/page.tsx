export default function Page() {
  return (
    <section className="flex flex-1 flex-col my-10 lg:my-0 lg:flex-row items-middle box-border p-2">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold border-b-2 border-blue-500">
          Contact
        </h1>
        <form className="my-5 min-w-full">
          <p className="w-full">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            ></input>
          </p>
          <p className="w-full">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            ></input>
          </p>
          <p className="w-full">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone number
            </label>
            <input
              type="tel"
              name="number"
              className="block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            ></input>
          </p>
          <p className="w-full">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              className=" no-resize appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-36 resize-none"
            ></textarea>
          </p>
          <p className="w-full">
            <button className="shadow bg-blue-500 hover:bg-blue-600 focus:border-2 focus:border-blue-300 focus:outline-none text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </p>
        </form>
      </div>
      <div className="w-full h-min  bg-slate-100 rounded bg-opacity-30 p-5 mb-5 lg:p-10 lg:m-10 font-light">
        <h2 className="text-bold text-2xl">
          I can also be reached at 07928182031 by phone or WhatsApp.
        </h2>
      </div>
    </section>
  );
}
