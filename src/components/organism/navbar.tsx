import logo from "@/assets/logo.svg";
import Button from "../ui/button";

const Navbar = () => {
  return (
    <nav className="z-50 flex items-center bg-white px-12 py-4 drop-shadow-md">
      <img src={logo} alt="logo" className="w-48" />
      <ul className="flex flex-1 items-center justify-center gap-20">
        <li>What we do</li>
        <li>Who we are</li>
        <li>Our impacts</li>
        <li>Get involved</li>
      </ul>
      <Button>Donate now</Button>
    </nav>
  );
};

export default Navbar;
