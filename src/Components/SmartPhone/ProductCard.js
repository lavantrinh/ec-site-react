import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function ProductCard(props) {
    return (
       <div className='mb-5'>
      <h4>
       LAPTOP
       </h4>
       <Row xs={3} md={3} className="g-4">
       
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="img/iPhone_14_Pro_Deep_Purple_01.jpeg" />
            <Card.Body>
              <Card.Title>Iphone 14</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </div>
    );
}

export default ProductCard;