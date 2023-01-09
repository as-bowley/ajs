import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: any;
  name: String;
  setIsOpen: any;
}

export default function NavLink({ href, name, setIsOpen }: Props) {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  return (
    <Link
      href={href}
      onClick={setIsOpen}
      className={`block py-2 pl-3 pr-4 text-lg font-light text-white rounded lg:bg-transparent lg:p-0 lg:items-center lg:justify-center hover:lg:border-b-2 hover:lg:border-b-blue-500 hover:lg:rounded-none ${
        ariaCurrent === "page"
          ? "bg-blue-500  lg:border-b-2 lg:border-b-blue-500 lg:text-black lg:rounded-none "
          : "text-black"
      }`}
      aria-current={ariaCurrent}
    >
      {name}
    </Link>
  );
}
