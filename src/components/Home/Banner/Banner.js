import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './images/image3.jpg'
import img2 from './images/image1.png'
import img3 from './images/image4.jpg'
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      width="75%"
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      width="75%"
      alt="Second slide"
      height="500px"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="100%"
      height="500px"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;