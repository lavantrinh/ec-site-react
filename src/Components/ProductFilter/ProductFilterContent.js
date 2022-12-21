import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function ProductFilterContent(props) {
    let { productFilter } = props;
    let items = "";
    items = productFilter.map((product, index) => {
        return (
            <Col key={index}>
                <Card>
                    <Card.Img variant="top" src={"img/" + product.image} alt={product.image_detail} />
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
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
            </Col>
        )
    });
    return (
    <div className='mb-5'>
      <h4>
        KẾT QUẢ TÌM KIẾM
      </h4>
      <Row xs={3} md={3} className="g-4">

        {items}
      </Row>
    </div>
  );
}

export default ProductFilterContent;