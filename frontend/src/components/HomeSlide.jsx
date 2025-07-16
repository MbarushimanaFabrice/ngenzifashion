import React from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { assets } from "../assets/assets";

function HomeSlide() {
  return (
  <Zoom indicators={index => <div className="indicator"></div>} scale={1.4}>
        <div className="each-slide-effect">
            <div className=" h-[596px]" style={{
          
      backgroundImage: `url(${assets.hero_img})`,backgroundSize: 'cover',backgroundPosition:'center' }}>
            <span> 
                
            </span> 
            </div>
        </div>
        <div className="each-slide-effect">
            <div className=" h-[596px]" style={{
         backgroundImage: `url(${assets.men})`,backgroundSize: 'cover',backgroundPosition:'center' }}>            <span>
                
            </span>
            </div>
        </div>
        <div className="each-slide-effect">
            <div className=" h-[596px]" style={{
          backgroundImage: `url(${assets.young})`,backgroundSize: 'cover',backgroundPosition:'center' }}>

            <span>
                
            </span>
            </div>
        </div>
    </Zoom>
  );
}

export default HomeSlide;
