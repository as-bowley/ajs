export default function Page() {
  return (
    <section className="p-2 my-10">
      <div className="max-w-prose lg:bg-white/20 rounded">
        <h1 className="text-3xl font-bold border-b-2 border-blue-500 mb-4">
          Services
        </h1>
        <p className="mb-4 text-lg font-light">
          As an auto electrician, I offer a wide range of services to help
          diagnose and repair any electrical issues you may be experiencing with
          your vehicle. These services include:
        </p>
        <ul className="list-disc pl-3 text-lg font-light">
          <li>
            Starting and charging system repairs: If your vehicle is having
            trouble starting or maintaining a charge, I can diagnose and repair
            the issue, whether it be a faulty battery, alternator, or starter.
          </li>
          <li>
            Lighting and wiring repairs: If you are experiencing issues with
            your vehicle{`'`}s lighting or wiring, I can assess and repair the
            problem, ensuring your vehicle is safe and functioning properly.
          </li>
          <li>
            Electronic component repairs: From computer and sensor issues to
            dashboard lights and cruise control, I can troubleshoot and repair
            any electronic issues you may be experiencing.
          </li>
          <li>
            Pre-purchase inspections: If you are considering purchasing a used
            vehicle, I can provide a thorough inspection of the vehicle{`'`}s
            electrical system to ensure it is in good working order.
          </li>
        </ul>
      </div>
    </section>
  );
}
