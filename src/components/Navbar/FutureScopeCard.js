import React from 'react'

const FutureScopeCard = (props) => {
  return (
    <div>  <div>
    <div className=" rounded-lg h-80 border-fuchsia-600 border-2 text-white flex  flex-col w-96 ">
      
      
      <div className="  text-center">
        <h1 className=" pt-10 font-bold font-ubuntu ml-1 text-Indigo text-2xl text-center">
          {props.FeaturesData.Heading}
        </h1>
        <div className="pt-7 text-center">
          <h1 className="font-semibold ml-1 text-Indigo text-lg text-center">
          {props.FeaturesData.Description}
          </h1>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default FutureScopeCard