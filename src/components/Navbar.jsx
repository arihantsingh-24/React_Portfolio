import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaX} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center w-14  ">
        <img src={logo} alt="logo" className="rounded-full " />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/arihant-singh-a59b67255">
          <FaLinkedin />
        </a>
        <a href="https://github.com/arihantsingh-24">
          <FaGithub />
        </a>
        <a href="https://x.com/Arihant_singh__">
          <FaX />
        </a>
        <a href="https://www.instagram.com/arihant_singh__/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
