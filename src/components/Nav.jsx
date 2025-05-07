import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import {
  FiMenu,
  FiX,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
} from "react-icons/fi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100 dark:bg-gray-900 border-b border-gray-200 shadow dark:border-gray-700"
          : ""
      } ${menuOpen ? "bg-gray-100 dark:bg-gray-900" : ""}`}
    >
      <div className="w-[95%] md:w-[80%] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          {" "}
          <a href="#home">Kamal.dev</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex lg:gap-6 text-sm font-medium">
          <li className="p-1 lg:p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <a href="#home">Home</a>
          </li>
          <li className="p-1 lg:p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <a href="#about">About</a>
          </li>
          <li className="p-1 lg:p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <a href="#stack">Tech Stack</a>
          </li>
          <li className="p-1 lg:p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-1 lg:p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="hidden md:flex lg:gap-4 items-center">
          {/* Social links */}
          <ul className="hidden md:flex md:gap-2 lg:gap-6 text-sm font-medium">
            <li className="cursor-pointer text-xl md:text-2xl hover:text-black">
              <a
                href="https://github.com/Kamaludyn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </li>
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#bc1888]">
              <a
                href="https://www.instagram.com/kaydheen_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
            </li>
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#1877f2]">
              <a
                href="https://web.facebook.com/KingKamaludeen305"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook />
              </a>
            </li>
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#1da1f2]">
              <a
                href="https://x.com/KayDheen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle (desktop only) */}
          <DarkModeToggle />
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`bg-gray-100 dark:bg-gray-900 border-b border-gray-200 shadow dark:border-gray-700 md:hidden px-4 pb-4 space-y-3 ${
            scrolled
              ? "bg-gray-100 dark:bg-gray-900 border-b border-gray-200 shadow dark:border-gray-700"
              : ""
          }`}
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#stack" onClick={toggleMenu}>
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          {/* Socials */}
          <ul className="flex gap-4 text-sm font-medium">
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#bc1888]">
              <a
                href="https://github.com/Kamaludyn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </li>
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#bc1888]">
              <a
                href="https://www.instagram.com/kaydheen_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
            </li>
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#1877f2]">
              <a
                href="https://web.facebook.com/KingKamaludeen305"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook />
              </a>
            </li>
            <li className="cursor-pointer text-xl md:text-2xl hover:text-[#1da1f2]">
              <a
                href="https://x.com/KayDheen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Nav;
