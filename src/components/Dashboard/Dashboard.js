import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div class=" ">
        <nav class="px-2 sm:px-4 p-4 mb-8">
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
          </div>
        </nav>
      </div>

      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button> */}

      <div className="flex flex-row ">
        <aside
          id="default-sidebar"
          class=" border-r-2 relative top-0 left-0 z-40 w-56 transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="dashboard"
                  class="flex items-center p-2 text-white rounded-lg "
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div id="Dashboard" className="flex flex-col text-white mt-10 p-6 ">
          <div>
            <h1 className=" text-2xl mb-6">Departments</h1>
          </div>

          <div className="flex flex-row  m-auto space-x-10">
            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  IT
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Marketing
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Operations
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Business
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>

          <div className="mt-10 ">Recent transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
