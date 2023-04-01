import { Routes, Route } from "react-router-dom"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Signup/Signup";
import { Banana } from '@rize-labs/banana-wallet-sdk/dist/BananaProvider'
import { Chains } from '@rize-labs/banana-wallet-sdk/dist/Constants';
import { useEffect, useState } from "react";
import { ethers } from 'ethers';

function App() {

  useEffect(() => {
    getBananaInstance();
  }, []);

  const [walletName, setWalletName] = useState('');
  const [walletAddress, setWalletAddress] = useState('')
  const [bananaSdkInstance, setBananSdkInstance] = useState(null);
  const [signedMessage, setSignedMessage] = useState('')
  const [signature, setSignature] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageTobeSigned, setMessageTobeSigned] = useState('');

  const getBananaInstance = () => {
    const jsonRpcMumbaiUrl = 'https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4'
    const bananaInstance = new Banana(Chains.mumbai, jsonRpcMumbaiUrl);
    setBananSdkInstance(bananaInstance)
  }

  const createWallet = async () => {
    if(walletName === "") {
      alert("Wallet name can't be empty!!")
      return;
    }
    setIsLoading(true);
    const isWalletNameUnqiue = await bananaSdkInstance.isWalletNameUnique(walletName);
    if(!isWalletNameUnqiue) {
      alert("Wallet name provided is not unique");
      setIsLoading(false);
      return
    }
    const walletAddres = (await bananaSdkInstance.createWallet(walletName)).address
    console.log(walletAddres);
    setWalletAddress(walletAddres)
    setIsLoading(false);
  }
    

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple via-purple-900 to-black">
    <Routes>
      <Route path="/" element={ <Navbar bananaSdkInstance={bananaSdkInstance}/> } />
      <Route path="/signup" element={ <SignUp/> } />
    </Routes>
  </div>

  );
}

export default App;
