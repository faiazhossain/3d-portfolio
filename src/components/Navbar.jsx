import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo2, menu, close } from "../assets";
import fhIcon from "../assets/fhIcon.jpeg";
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            // width={64}
            src={logo2}
            alt="logo"
            className="w-9 h-9 object-contain"
          ></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Faiaz <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
