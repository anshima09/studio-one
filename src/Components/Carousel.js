import React from 'react'
import banner1 from '../Assets/banner1.jpg'
import banner2 from '../Assets/banner2.jpg'
import banner3 from '../Assets/banner3.jpeg'
import banner4 from '../Assets/banner4.png'
import banner5 from '../Assets/banner5.png'

import ImageCarousel from './ImageCarousel'
const Carousel = () => {
    const images = [
        banner1,
        banner2,
       banner4,
       banner5,
       banner3,
      ];
    
      return (
        <div>
          <ImageCarousel images={images} />
        </div>
      );
}

export default Carousel