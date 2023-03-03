import React from "react";
import { NavLink } from "react-router-dom";
import Account from "./Account";

const Navbar = () => {

  return (
    <header className="text-gray-600 body-font bg-white relative z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
        </NavLink>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/">
            <a className="mr-5 text-gray-600 hover:text-gray-900">Home</a>
          </NavLink>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center items-center outline-none border-none bg-white px-3 py-2 "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Courses
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <NavLink to="/webdev">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Web development
                  </a>
                </NavLink>
                <NavLink to="/webdesign">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Web designing
                  </a>
                </NavLink>
                <NavLink to="/">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Personality Development
                  </a>
                </NavLink>
                <NavLink to="/">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    IAS Preparation
                  </a>
                </NavLink>
                <NavLink to="/">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    UPSC Aspirants
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/jobs">
            <a className="mr-5 hover:text-gray-900">Jobs</a>
          </NavLink>
        </nav>
        <Account />
        {/* <button className="inline-flex w-16 h-16 rounded-full items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 text-base text-white mt-4 md:mt-0"></button> */}
      </div>
    </header>
  );
};

export default Navbar;
