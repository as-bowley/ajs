import "../styles/globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="flex flex-col h-screen 
     lg:mx-[8%] box-border"
      >
        <div
          className="-z-10 absolute overflow-hidden right-0 w-0 max-h-full 
   border-l-[50vh] border-l-transparent
   border-b-[100vh] border-b-amber-200 lg:border-l-[100vh]
   "
        ></div>
        <Navbar></Navbar>
        <main className="overflow-scroll h-screen mx-0 px-[8%] bg-slate-50/40 lg:bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}
