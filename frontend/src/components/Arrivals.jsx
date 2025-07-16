import React from "react";
import { assets } from "../assets/assets";

function Arrivals() {
  return (
    <div>
      <p className=" text-xl mt-3 text-slate-500">
        Elevete your lifestyle with more Ngenzi <br /> fashion best fashion
        designer{" "}
      </p>
      <div className=" flex  justify-center items-center ">
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 space-x-20">
          <div>
            <img className=" rounded-lg h-[476px]" src={assets.women_clothes} />
            <p className=" absolute -mt-16 ml-4 text-white text-xl">
              For young
            </p>
          </div>
          <div> 
            <img className=" rounded-lg h-[476px]" src={assets.men} />
            <p className=" absolute -mt-16 ml-4 text-white text-xl">
              For young
            </p>
          </div>
          <div className=" relative">
            <img className=" rounded-lg h-[476px]" src={assets.young} />
            <p className=" absolute -mt-16 ml-4 text-white text-xl">
              For young
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
