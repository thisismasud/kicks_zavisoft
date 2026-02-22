"use client";

import { Menu, X } from "lucide-react"; // Added X for a better toggle UI
import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button onClick={() => setShowMenu(!showMenu)} className="p-1">
        {showMenu ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute bg-white top-15 rounded-xl w-full transition-all duration-300 ease-in-out p-5 -ml-4 z-100 ${
          showMenu
            ? "opacity-100 translate-y-0 flex-col flex gap-5"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
        `}
      >
        <Navbar />
        <Search />
      </div>
    </div>
  );
};

export default HamburgerMenu;
