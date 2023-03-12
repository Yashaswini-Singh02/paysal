// import { Link } from "react-router-dom";
import React from "react";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  return (
    <div>
      <nav class="px-2 sm:px-4 p-4 ">
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
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col  mt-4 border  rounded-lg  md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <div class="relative inline-block text-left">
                  <div className="inline-flex w-full justify-center rounded-lg px-5 py-2 text-md font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                    <Dropdown label="Login" inline={true} arrowIcon={false}>
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item>Earnings</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative inline-block text-left">
                  <div className="flex w-full justify-around gap-x-1.5 rounded-lg px-3 py-2 text-md font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                    <Dropdown label="Signin" inline={true} arrowIcon={false}>
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item>Earnings</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
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
