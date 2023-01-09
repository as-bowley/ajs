import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <section className="flex flex-1 flex-col my-10 lg:my-0 lg:flex-row items-middle box-border p-2">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold border-b-2 border-blue-500">
          Contact
        </h1>
        <ContactForm></ContactForm>
      </div>
      <div className="w-full h-min  bg-slate-100 rounded bg-opacity-30 p-5 mb-5 lg:p-10 lg:m-10 font-light">
        <h2 className="text-bold text-2xl">
          I can also be reached at{" "}
          <a href="tel:07986965153" className="text-blue-500">
            07986965153
          </a>{" "}
          by phone or WhatsApp.
        </h2>
      </div>
    </section>
  );
}
