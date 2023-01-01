import "../styles/globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
