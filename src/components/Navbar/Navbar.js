// import { Link } from "react-router-dom";
import React from "react";
import {Dropdown} from "flowbite-react";

const Navbar = () => {
  return (
    <div>
      <nav class=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple via-purple-900 to-black px-2 sm:px-4 p-4 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl  text-white font-semibold whitespace-nowrap ">
              PaySal
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only ">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col  mt-4 border  rounded-lg  md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <div class="relative inline-block text-left">
                  <div>
                    {/* <button
                      type="button"
                      class="inline-flex w-full justify-center gap-x-1.5 rounded-lg px-3 py-2 text-md font-semibold text-white ring-2 ring-inset ring-fuchsia-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Sign in 
                      <svg
                        class="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button> */}
                    <Dropdown label="Dropdown">
                      <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                          bonnie@flowbite.com
                        </span>
                      </Dropdown.Header>
                      <Dropdown.Item >Dashboard</Dropdown.Item>
                      <Dropdown.Item >Settings</Dropdown.Item>
                      <Dropdown.Item >
                        Earnings
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item >Sign out</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="inline-flex w-full justify-center gap-x-1.5 rounded-lg px-3 py-2 text-md font-semibold text-white ring-2 ring-inset ring-fuchsia-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Log in
                      <svg
                        class="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// Link to helps to create Multipage

/* <Link to="SignUp">Click to view our SignUp page</Link> */
