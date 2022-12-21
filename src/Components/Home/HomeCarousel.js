import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function HomeCarousel(props) {
    return (
        <div>
              <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Untitled.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Iphone 14 Pro</h3>
         <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>Dynamic Island</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/05-hd02-watch5-kv-pc-1440x640.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Samsung Galaxy Watch</h3>
          <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>The watch that knows you best</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/PCD_Galaxy-Z_Curation-KV_1440x640_pc_LTR.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Galaxy Z</h3>
         <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>Linh hoạt biến hóa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default HomeCarousel;