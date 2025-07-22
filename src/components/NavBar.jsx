import { useState, useEffect } from "react";
import EmailSVG from "../assets/Email.jsx";
import GithubIcon from "../assets/Github.jsx";
import LinkedInSVG from "../assets/Linkedin.jsx";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav
      className="flex justify-between p-6 mt-3 mb-3 top-0 z-50 h-18 bg-gradient-to-r from-[#b6b6b6]/20 via-[#b6b6b6]/10 to-[#b6b6b6]/20 
        backdrop-blur-lg backdrop-saturate-150 sm:w-7xl rounded-[250px] bg-clip-padding
        shadow-2xl shadow-[rgba(255, 255, 255, 0.9)] border border-white/20 items-center
        hover:shadow-2xl fixed transition-all duration-500 w-[95%] "
    >
      <div
        className="ml-3 text-white cursor-pointer font-[600] sm:text-2xl text-xl 
        transition-all duration-300 hover:scale-105 drop-shadow-lg"
        onClick={() => scrollToSection("home")}
      >
        Syed Umer
      </div>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      )}

      {/* Navigation Links - Desktop */}
      {!isMobile && (
        <ul className="flex space-x-3">
          <li
            className="p-3 px-5 border border-white/30 bg-white/5 rounded-full cursor-pointer 
            hover:shadow-xl hover:scale-105 hover:bg-[rgba(0,0,0,0.2)]
            transition-all duration-300 backdrop-blur-sm"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-white hover:scale-103 transition-colors duration-300 font-medium">
              About Me
            </span>
          </li>
          <li
            className="p-3 px-5 border border-white/30 bg-white/5 rounded-full cursor-pointer 
            hover:shadow-xl hover:scale-105 hover:bg-[rgba(0,0,0,0.2)]
            transition-all duration-300 backdrop-blur-sm"
            onClick={() => scrollToSection("projects")}
          >
            <span className="text-white hover:text-white transition-colors duration-300 font-medium">
              Projects
            </span>
          </li>
          <li
            className="p-3 px-5 border border-white/30 bg-white/5 rounded-full cursor-pointer 
            hover:shadow-xl hover:scale-105 hover:bg-[rgba(0,0,0,0.2)]
            transition-all duration-300 backdrop-blur-sm"
            onClick={() => scrollToSection("contact")}
          >
            <span className="text-white hover:text-white transition-colors duration-300 font-medium">
              Contact
            </span>
          </li>
        </ul>
      )}

      {/* Social Icons - Desktop */}
      {!isMobile && (
        <ul className="flex space-x-1">
          <li className="group relative">
            <a
              href="https://github.com/umarprivit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 
                hover:bg-[rgba(0,0,0,0.2)] hover:shadow-xl hover:shadow-[rgba(17,17,17,0.36)] hover:scale-110 
                transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <GithubIcon
                height={28}
                width={28}
                className="text-white group-hover:text-yellow-300 transition-colors duration-300"
              />
            </a>
            <div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              GitHub
            </div>
          </li>

          <li className="group relative">
            <a
              href="https://www.linkedin.com/in/syed-umerali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 
                hover:bg-[rgba(0,0,0,0.2)] hover:shadow-xl hover:shadow-[rgba(17,17,17,0.36)] hover:scale-110 
                transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <LinkedInSVG
                height={28}
                width={28}
                className="text-white group-hover:text-yellow-300 transition-colors duration-300"
              />
            </a>
            <div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              LinkedIn
            </div>
          </li>

          <li className="group relative">
            <a
              href="mailto:umarprivit@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 
                hover:bg-[rgba(0,0,0,0.2)] hover:shadow-xl hover:shadow-[rgba(17,17,17,0.36)] hover:scale-110 
                transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <EmailSVG
                height={28}
                width={28}
                className="text-white group-hover:text-yellow-300 transition-colors duration-300"
              />
            </a>
            <div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              Email
            </div>
          </li>
        </ul>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobile && isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-[#4e4e4ec5] 
          backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl mx-4"
        >
          <ul className="flex flex-col p-4 space-y-3">
            <li
              className="p-3 px-5 border border-white/30 bg-white/5 rounded-full cursor-pointer 
              hover:shadow-xl hover:scale-105 hover:bg-[rgba(0,0,0,0.2)]
              transition-all duration-300 backdrop-blur-sm text-center"
              onClick={() => scrollToSection("about")}
            >
              <span className="text-white transition-colors duration-300 font-medium">
                About Me
              </span>
            </li>
            <li
              className="p-3 px-5 border border-white/30 bg-white/5 rounded-full cursor-pointer 
              hover:shadow-xl hover:scale-105 hover:bg-[rgba(0,0,0,0.2)]
              transition-all duration-300 backdrop-blur-sm text-center"
              onClick={() => scrollToSection("projects")}
            >
              <span className="text-white transition-colors duration-300 font-medium">
                Projects
              </span>
            </li>
            <li
              className="p-3 px-5 border border-white/30 bg-white/5 rounded-full cursor-pointer 
              hover:shadow-xl hover:scale-105 hover:bg-[rgba(0,0,0,0.2)]
              transition-all duration-300 backdrop-blur-sm text-center"
              onClick={() => scrollToSection("contact")}
            >
              <span className="text-white transition-colors duration-300 font-medium">
                Contact
              </span>
            </li>
          </ul>

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-4 p-4 border-t border-white/20">
            <a
              href="https://github.com/umarprivit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 
                hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <GithubIcon height={20} width={20} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-umerali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 
                hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <LinkedInSVG height={20} width={20} className="text-white" />
            </a>
            <a
              href="mailto:umarprivit@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 
                hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <EmailSVG height={20} width={20} className="text-white" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
