import logo from "@/assets/logo.svg";
import Button from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

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
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="z-50 lg:gap-40 md flex items-center justify-between lg:justify-normal bg-white px-4 lg:px-12 py-4 drop-shadow-md">
      <Link href={"/"} className="" onClick={() => setIsNavOpen(false)}>
        <img src={logo.src} alt="logo" className="w-32 lg:w-48" />
      </Link>
      <div className="flex md:flex-1 items-center justify-end gap-4">
        <NavContent isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <div className="flex items-center justify-end gap-4">
          <Button className="text-nowrap">Donate now</Button>
          <HamburgerMenu
            open={isNavOpen}
            width={30}
            height={30}
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="lg:hidden block"
          />
        </div>
      </div>
    </nav>
  );
};

const NavContent = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
}) => {
  return (
    <ul
      className={clsx(
        "absolute left-0 top-16 h-0 w-full overflow-hidden bg-white py-0 shadow-nav transition-all lg:relative lg:left-auto lg:top-0 flex flex-col lg:h-auto lg:flex-row lg:items-center lg:bg-transparent lg:bg-none lg:py-0 lg:shadow-none z-50",
        isNavOpen && "h-72 py-5 border-t lg:border-none"
      )}
    >
      {headerLinks.map((link, index) => (
        <li key={index} className="flex-1 lg:flex-auto">
          <Link
            href={link.link}
            onClick={() => setIsNavOpen(false)}
            className="px-6 lg:px-0 text-lg h-full w-full font-semibold flex items-center text-nowrap"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const HamburgerMenu = (
  props: React.SVGProps<SVGSVGElement> & { open: boolean }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      d="M33.417 18.334H6.583c-.874 0-1.583.708-1.583 1.583v.166c0 .875.709 1.584 1.583 1.584h26.834c.874 0 1.583-.71 1.583-1.584v-.166c0-.875-.709-1.584-1.583-1.584m0 8.334H6.583C5.71 26.667 5 27.374 5 28.25v.166C5 29.292 5.709 30 6.583 30h26.834C34.29 30 35 29.29 35 28.416v-.166c0-.875-.709-1.584-1.583-1.584m0-16.666H6.583C5.71 10 5 10.709 5 11.583v.167c0 .874.709 1.583 1.583 1.583h26.834c.874 0 1.583-.709 1.583-1.583v-.167C35 10.71 34.291 10 33.417 10"
      fill="#1B1717"
    />
  </svg>
);

export default Navbar;
