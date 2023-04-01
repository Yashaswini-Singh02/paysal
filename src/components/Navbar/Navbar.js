import { Link } from "react-router-dom";
import React from "react";
import { Dropdown } from "flowbite-react";
import { useState } from "react";

const Navbar = (props) => {

  const bananaSdkInstance = props.bananaSdkInstance;
  

  const [walletName, setWalletName] = useState('Karan');
  const [walletAddress, setWalletAddress] = useState('')
  const [signedMessage, setSignedMessage] = useState('')
  const [signature, setSignature] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageTobeSigned, setMessageTobeSigned] = useState('');

  const createWallet = async () => {
    console.log(bananaSdkInstance)
    if(walletName === "") {
       alert("Wallet name can't be empty!!")
       return;
     }
     const isWalletNameUnqiue = await bananaSdkInstance.isWalletNameUnique(walletName);
     if(!isWalletNameUnqiue) {
       alert("Wallet name provided is not unique");
       return
     }
     const name = await bananaSdkInstance.getWalletName();
     const walletAddres = (await bananaSdkInstance.createWallet(walletName)).address
     setWalletAddress(walletAddres)
   }

  

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
            <ul class="flex flex-col  mt-4 border gap-7 rounded-lg  md:flex-row  md:text-sm md:font-medium md:border-0 ">
              <li>
                <div class="relative inline-block text-left">
                  <div className="flex w-full  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                  <button label="Login" onClick={createWallet}>
                      Login 
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div class="relative inline-block text-left">
                  <div className="flex w-full  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold text-white ring-2 ring-inset ring-fuchsia-600">
                    <button label="Sign up">
                      
                      <Link to="SigninOrg">Sign Up</Link>
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

/* <Link to="SignUp">Click to view our SignUp page</Link> */
