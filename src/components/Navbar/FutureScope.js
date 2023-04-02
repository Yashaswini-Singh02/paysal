import React from 'react'
import FutureScopeCard from './FutureScopeCard';

const FutureScope = () => {
    const FeaturesData = [
        {
         
          Heading: "Driver Policy",
          Description:
            "To empower women and to ensure safety, She-Cab provides you with trained Female Drivers",
        },
        {
         
          Heading: "Passenger Policy",
          Description:
            "To ensure your comfort and safety She-Cab only allows Female Passengers",
        },
        {
         
          Heading: "EV Cabs",
          Description:
            "To reduce carbon emissions and to save our environment, we use electric vehicles only as our cabs",
        },
      ];
    
      return (
        <div className="mt-10 font-display" id="features">
          <p className=" text-4xl text-[white] font-bold ml-48 mb-12">
            Future Scope{" "}
          </p>
          <div className="flex flex-row justify-center gap-10 p-20">
            <FutureScopeCard FeaturesData={FeaturesData[0]} />
            <FutureScopeCard FeaturesData={FeaturesData[1]} />
            <FutureScopeCard FeaturesData={FeaturesData[2]} />
          </div>
        </div>
      );
};

export default FutureScope