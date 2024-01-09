import logo from "@/assets/logo.svg";
import Button from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center py-4 px-12 drop-shadow-md bg-white">
      <img src={logo} alt="logo" className="w-48" />
      <ul className="flex gap-20 items-center justify-center flex-1">
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
