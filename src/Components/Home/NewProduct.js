import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
function NewProduct(props) {
  let { NewProduct } = props;
  let items = "";


  items = NewProduct.map((product, index) => {

    return (
      <Col xs={3} md={3} sm={3} xl={3} key={index}>
        <Link to={`/products/${product.productID}`} className='text-decoration-none text-dark'>
        <Card className='border-0 h-100 shadow-lg'>
          <Card.Img variant="top" src={"img/" + product.image} alt={product.image_detail} />
          <Card.Body>
            <Card.Title className='fw-bold'>{product.productName}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text className="text-decoration-line-through my-0 py-0">
              {product.price} vnd
            </Card.Text>
            <Card.Text className='fw-bold text-danger'>
              <i className="bi bi-cart3"></i>  {product.sale_price} vnd
            </Card.Text>
          </Card.Body>
          </Card>
          </Link>
      </Col>
    );
  });
  return (
    <Container>
      <h3 className='text-center mb-5'>SẢN PHẨM MỚI</h3>

      <Row className="justify-content-md-center">
        <Col xs lg="10">
          <Row className="g-4">

            {items}
          </Row>
        </Col>

      </Row>

    </Container>


  );
}

export default NewProduct;