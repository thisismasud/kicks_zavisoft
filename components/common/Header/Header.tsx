import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Search from "./Search";
import { Menu } from "lucide-react";



const Header = () => {
  return (
    <header className="md:h-[96px] h-[52px] relative bg-white md:p-8 p-5 md:px-8 px-4 flex items-center justify-between mt-8 rounded-xl md:rounded-3xl font-rubik w-full">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <HamburgerMenu  />

      <div className="shrink-0 lg:-ml-28 md:-ml-16 ml-0">
        <Logo />
      </div>
      <div className="flex items-center lg:gap-10 md:gap-6 gap-2" aria-label="User tools">
        <div className="hidden md:block">
            <Search />
        </div>
        <Profile />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
