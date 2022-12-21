import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function TabletContent(props) {

    let { Tablet } = props;
    let items = "";
    items = Tablet.map((tablet, index) => {
         return (
            <Col key={index}>
                <Card>
                    <Card.Img variant="top" src={"img/" + tablet.image} />
                    <Card.Body>
                        <Card.Title>{tablet.productName}</Card.Title>
                        <Card.Text>
                            {tablet.description}
                        </Card.Text>
                        <Card.Text className="text-decoration-line-through my-0 py-0">
                            {tablet.price} vnd
                        </Card.Text>
                        <Card.Text className='fw-bold text-danger'>
                            <i className="bi bi-cart3"></i>  {tablet.sale_price} vnd
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
  
    return (
        <div className='mb-5'>
            <h4>
                MÁY TÍNH BẢNG
            </h4>
            <Row xs={3} md={3} className="g-4">
                {items}
                
            </Row>
        </div>
    );
}

export default TabletContent;