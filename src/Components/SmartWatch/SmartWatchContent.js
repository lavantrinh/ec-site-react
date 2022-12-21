import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function SmartWatchContent(props) {
    let { SmartWatch } = props;
    let items = "";
    items = SmartWatch.map((smartwatch, index) => {
        return (
             <Col key={index}>
                <Card>
                    <Card.Img variant="top" src={"img/" + smartwatch.image} />
                    <Card.Body>
                        <Card.Title>{smartwatch.productName}</Card.Title>
                        <Card.Text>
                            {smartwatch.description}
                        </Card.Text>
                        <Card.Text className="text-decoration-line-through my-0 py-0">
                            {smartwatch.price} vnd
                        </Card.Text>
                        <Card.Text className='fw-bold text-danger'>
                            <i className="bi bi-cart3"></i>  {smartwatch.sale_price} vnd
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
         <div className='mb-5'>
            <h4>
               SMART WATCH
            </h4>
            <Row xs={3} md={3} className="g-4">
                {items}
                
            </Row>
        </div>
    );
}

export default SmartWatchContent;