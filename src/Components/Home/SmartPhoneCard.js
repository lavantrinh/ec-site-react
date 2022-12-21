import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function ProductCard(props) {
  let { SmartPhone } = props;
  let items = "";
  items = SmartPhone.map((smartphone, index) => {
    return (
      <Col key={index}>
         <Link to={`/products/${smartphone.productID}`} className='text-decoration-none text-dark'>
        <Card className='h-100'>
          <Card.Img variant="top" src={"img/" + smartphone.image} alt={smartphone.image_detail} />
          <Card.Body>
            <Card.Title>{smartphone.productName}</Card.Title>
            <Card.Text>
              {smartphone.description}
            </Card.Text>
            <Card.Text className="text-decoration-line-through my-0 py-0">
              {smartphone.price} vnd
            </Card.Text>
            <Card.Text className='fw-bold text-danger'>
              <i className="bi bi-cart3"></i>  {smartphone.sale_price} vnd
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
        ĐIỆN THOẠI
      </h4>
      <Row xs={3} md={3} className="g-4">

        {items}
      </Row>
    </div>

  );
}

export default ProductCard;