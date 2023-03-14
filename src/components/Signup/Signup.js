import React from 'react'


const Signup = () => {
  return (
    <div>
        <div class=" h-screen w-full m-auto  max-w-xl ">
  <form class=" flex flex-col gap-4 justify-center item-center bg-white shadow-md rounded px-8 py-6 pb-10 ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </input>
      
    </div>
    <div class="flex space-x-2 items-center justify-between">
      <button class="bg-mint-green  hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up As An Organization 
      </button>
      <button class="bg-mint-green hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up As An Employee
      </button>
      


     
    </div>
  </form>
  <p class="text-center mt-96 text-gray-500 text-xs">
    &copy;2023 PaySal Corp. All rights reserved.
  </p>
</div>
    </div>
    
  )
}

export default Signup