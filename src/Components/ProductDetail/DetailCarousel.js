import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function DetailCarousel(props) {
  let { ProductImage } = props;
  let items = "";
  items = ProductImage.map((img, index) => {
    return (
       <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={"../img/"+img.imageURL}
          alt={img.imageDetail}
        />
      
      </Carousel.Item>
    )
  })
    return (
        <Carousel>
     {items}
        
    </Carousel>
    );
}

export default DetailCarousel;