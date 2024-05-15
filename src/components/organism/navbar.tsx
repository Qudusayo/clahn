import logo from "@/assets/logo.svg";
import Button from "../ui/button";
import Link from "next/link";

const headerLinks = [
  {
    title: "Who we are",
    link: "/who-we-are",
  },
  {
    title: "What we do",
    link: "/what-we-do",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Our Gallery",
    link: "/gallery",
  },
  {
    title: "Get involved",
    link: "/get-involved",
  },
];

const Navbar = () => {
  return (
    <nav className="z-50 flex items-center bg-white px-12 py-4 drop-shadow-md">
      <Link href={"/"} className="flex-1">
        <img src={logo.src} alt="logo" className="w-48" />
      </Link>
      <div className="flex items-center gap-16">
        <ul className="flex flex-3 items-center justify-center gap-16">
          {headerLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.link} className="text-lg font-semibold">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button>Donate now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
