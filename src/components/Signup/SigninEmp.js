import React from 'react'

const SigninEmp = () => {
  return (
    <div >
      <div class="">
        <nav class="px-2  sm:px-4 p-4 mb-8">
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
      <div class="  m-auto  max-w-2xl drop-shadow-2xl">
        <form class=" flex flex-col gap-4 border-fuchsia-600 border-2 justify-center item-center text-white  rounded px-10 py-12 pb-10 ">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="Name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Name"
              type="text"
              placeholder="userame"
            ></input>
          </div>
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="Industry"
            >
              Position
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Industry"
              type="text"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="e-mail">
              Email Address
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="abc@company.com"
            ></input>
          </div>

          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2" for="Organization-Id">
              Organization-Id
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Organization-Id"
              type="text"
              placeholder="abc"
            ></input>
          </div>

          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="Wallet-Address"
            >
              Wallet Address
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="Wallet Adress"
              type="text"
            ></input>
          </div>

          <div class="flex space-x-2 items-center justify-between">
            <button
              class="bg-white w-24 hover:bg-fuchsia-100 text-black text-md font-bold py-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <p class="text-center mt-96 text-gray-500 text-xs">
          &copy;2023 PaySal Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SigninEmp;
