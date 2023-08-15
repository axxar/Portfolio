import React, { useState } from "react";
import { Link } from "react-router-dom";
import APLogo from './images/AP Logo.png';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
      <nav className="fixed top-0 w-full bg-gray-950 p-4 z-10 shadow-xl">
          <div className="container justify-between px-4 mx-auto items-center md:flex md:px-8">
              <div>
                  <div className="flex items-center justify-between md:block">
                    <Link to="/" className="hidden md:block text-white text-lg font-bold">
                        <img src={APLogo} alt="Logo" className="lg:w-14 md:w-12 sm:w-10 w-10" />
                    </Link>
                      <div className="md:hidden">
                          <button
                              className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => setNavbar(!navbar)}
                          >
                              {navbar ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>
              </div>
              <div>
                  <div
                      className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 md:space-x-8 ${
                          navbar ? "block" : "hidden"
                      }`}
                  >
                      <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0 text-gray-300 sm:text-xl text-md ">
                        <li><Link to="/about" className="hover:text-green-400" onClick={() => setNavbar(!navbar)}>About</Link></li>
                        <li><Link to="/portfolio" className="hover:text-green-400" onClick={() => setNavbar(!navbar)}>Portfolio</Link></li>
                        <li><Link to="/contact" className="hover:text-green-400" onClick={() => setNavbar(!navbar)}>Contact</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
  );
};

export default NavBar;
