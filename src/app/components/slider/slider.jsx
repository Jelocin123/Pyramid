import React, { useEffect } from 'react';

import Slider1 from "../../../../public/assets/7.png"
import Slider2 from "../../../../public/assets/8.jpeg"
import Slider3 from "../../../../public/assets/9.jpeg"


import Image from 'next/image';

const Slider = () => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          const nextButton = document.querySelector('.carousel-control-next');
          if (nextButton) {
            nextButton.click();
          }
        }, 5000);
    
        return () => clearTimeout(timeoutId);
      }, []);
  return (
    <div id="slider" className="carousel slide m-4  " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={Slider1} className="d-block w-100 rounded " alt="..."/>
      
    </div>
    <div className="carousel-item">
      <Image src={Slider2} className="d-block w-100 rounded" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <Image src={Slider3} className="d-block w-100 rounded" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider