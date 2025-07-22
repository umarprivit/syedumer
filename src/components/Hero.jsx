import { useEffect, useState } from "react";
import avatarImage from "../assets/avatar.png";
import NavBar from "./NavBar";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="">
      {/* Hero Section */}
      <div className="relative" id="hero">
        <div className="relative flex justify-center items-center">
          <NavBar />
        </div>

        {isMobile ? (
          <>
            <div
              className="flex flex-col relative justify-center items-center h-screen bg-yellow-300"
              id="home"
            >
              <div className="flex flex-col justify-center items-center sm:pl-16 pl-5 z-40 ">
                <div className="sm:text-6xl sm:font-extrabold text-white sm:mb-8 text-3xl font-bold ">
                  Hey, This is Syed Umer
                </div>
                <div className="sm:text-5xl text-white font-bold sm:mb-6 mt-4 ">
                  A{" "}
                  <span className="text-amber-600 bg-[#1a1a1a8f] backdrop-blur-lg rounded-lg p-1 sm:bg-transparent ">
                    Software Engineer
                  </span>
                </div>
              </div>

              <div className="whiteee absolute z-30 w-full h-full"></div>

              <div className="bg-amber-600 w-full h-full z-20 absolute clipped flex items-center justify-end sm:pr-20"></div>
              <img
                src={avatarImage}
                alt="AVATAR IMAGE"
                className="sm:h-150 sm:w-150 object-cover  z-40 h-90 w-90 mt-5"
              />
            </div>
          </>
        ) : (
          <>
            <div
              className="flex relative justify-between h-screen bg-yellow-300"
              id="home"
            >
              <div className="flex flex-col justify-center items-center sm:pl-16 pl-5 z-40 ">
                <div className="sm:text-6xl sm:font-extrabold text-white sm:mb-4 text-3xl font-bold mb-2">
                  Hey, This is Syed Umer
                </div>
                <div className="sm:text-4xl text-white font-bold sm:mb-6 mb-4">
                  A{" "}
                  <span className="text-amber-600 bg-[#1a1a1a8f] backdrop-blur-lg rounded-lg p-1 sm:bg-transparent">
                    Software Engineer
                  </span>
                </div>
              </div>

              <div className="whiteee absolute z-30 w-full h-full"></div>

              <div className="bg-amber-600 w-full h-full z-20 absolute clipped flex items-center justify-end sm:pr-20">
                <img
                  src={avatarImage}
                  alt="AVATAR IMAGE"
                  className="sm:h-150 sm:w-150 object-cover  z-80 h-70 w-70 mt-90"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* About Me Section */}
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20"
      >
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
                Who I Am
              </h3>
              <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-300">
                I'm a passionate Software Engineer with expertise in modern web
                technologies. I love creating innovative solutions and turning
                ideas into reality through code.
              </p>
              <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-300">
                With a strong foundation in both frontend and backend
                development, I enjoy building scalable applications that provide
                excellent user experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">
                    Frontend
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    React, JavaScript, Tailwind CSS, Flutter
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">
                    Backend
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Node.js, Databases
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-6 md:p-8 rounded-2xl">
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Quick Facts
                  </h4>
                  <ul className="space-y-3 text-white text-sm md:text-base">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Based in Your Location
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      1+ Years Experience
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Experience in Version Control
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Linux Expert
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20"
      >
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-lg md:text-xl text-gray-300 mt-6">
              Here are some of my recent works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Project 1 */}
            <a
              href="https://just-do-it-peach.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden 
              cursor-pointer hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    Tasker
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    A local marketplace that connects people with skilled
                    workers in their area for everyday chores and tasks. Whether
                    it's plumbing, cleaning, or repairs, get trusted help
                    quickly and easily.
                  </p>

                  <div className="flex justify-between items-center">
                    <a
                      href="https://just-do-it-peach.vercel.app/"
                      target="_blank"
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium 
                    transition-colors flex items-center"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <div className="text-gray-400 text-xs md:text-sm transition-colors flex items-center">
                      Hosted on Vercel
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 2 */}

            <a
              href="https://play.google.com/store/apps/details?id=com.appicator.itp_voice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden 
              cursor-pointer hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    ITP VOICE (MOBILE APP)
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    A real-time calling and chatting app using Flutter, deployed
                    on both the App Store and Play Store. Features include voice
                    calls, messaging, and a smooth cross-platform experience.
                  </p>

                  <div className="flex justify-between items-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.appicator.itp_voice"
                      target="_blank"
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium 
                    transition-colors flex items-center"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <div className="text-gray-400  text-sm transition-colors flex items-center">
                      PlayStore
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.let.find_my_bogie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden 
              cursor-pointer hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    Find My Bogie
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    A mobile app that helps users locate their train bogies in
                    real-time. Built with Flutter, it provides live tracking and
                    notifications for train arrivals and departures.
                  </p>

                  <div className="flex justify-between items-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.let.find_my_bogie"
                      target="_blank"
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium 
                    transition-colors flex items-center"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <div className="text-gray-400  text-sm transition-colors flex items-center">
                      PlayStore
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.appicator.itp_voice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden 
              cursor-pointer hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    Prime App
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Developed a course management app for a local client with
                    separate user and admin roles. Users can browse, purchase,
                    and enroll in courses, while admins can upload content,
                    manage users, and track enrollments.
                  </p>

                  <div className="flex justify-between items-center">
                    {/* <a
                      href=""
                      target="_blank"
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium 
                    transition-colors flex items-center"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a> */}
                    <div className="text-gray-400  text-sm transition-colors flex items-center">
                      PlayStore
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20"
      >
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-lg md:text-xl text-gray-300 mt-6">
              Let's work together on something amazing!
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm md:text-base">
                        Email
                      </p>
                      <p className="text-white font-semibold text-sm md:text-base">
                        umarprivit@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm md:text-base">
                        Location
                      </p>
                      <p className="text-white font-semibold text-sm md:text-base">
                        PAKISTAN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
