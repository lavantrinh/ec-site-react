import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LaptopCard(props) {
  let { Laptop } = props;
  let items = "";
  items = Laptop.map((laptop, index) => {
    return (
      <Col key={index}>
         <Link to={`/products/${laptop.productID}`} className='text-decoration-none text-dark'>
        <Card className='h-100'>
          <Card.Img variant="top" src={"img/" + laptop.image} alt={laptop.image_detail} />
          <Card.Body>
            <Card.Title>{laptop.productName}</Card.Title>
            <Card.Text>
              {laptop.description}
            </Card.Text>
            <Card.Text className="text-decoration-line-through my-0 py-0">
              {laptop.price} vnd
            </Card.Text>
            <Card.Text className='fw-bold text-danger'>
              <i className="bi bi-cart3"></i>  {laptop.sale_price} vnd
            </Card.Text>
          </Card.Body>
          </Card>
          </Link>
      </Col>
    )
  });

  return (
    <div className='mb-5'>
      <h4>
        LAPTOP
      </h4>
      <Row xs={3} md={3} className="g-4">

        {items}
      </Row>
    </div>
  );
}

export default LaptopCard;