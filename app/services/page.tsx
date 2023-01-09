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
          <li>DVS systems to FORS bronze, silver or gold standard.</li>
          <li>Visual warning systems e.g. beacons, strobes and worklights.</li>
          <li>Convenience systems e.g. inverters and split chargers.</li>
          <li>Diagnostics and fault finding.</li>
          <li>Dashcam installations.</li>
        </ul>
      </div>
    </section>
  );
}
