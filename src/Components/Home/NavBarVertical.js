import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Nav from 'react-bootstrap/Nav';
function NavBarVertical(props) {
    let { Catalog } = props;
    let items = "";
    items = Catalog.map((catalog, index) => {
        return <ListGroup.Item key={index}>
             <Nav.Link href={catalog.url} className='text-decoration-none text-dark'>
            {catalog.name}
            </Nav.Link>
        </ListGroup.Item>
    }
    )
        ;

    return (
        <div>

            <Card className='my-5 border-end-0 border-start-0 rounded-0'>
                <Card.Header id='NavCard' className='fw-bold text-white rounded-0'>DANH DỤC SẢN PHẨM</Card.Header>
                <ListGroup variant="flush">
                    {items}

                </ListGroup>
            </Card>


        </div>
    );
}

export default NavBarVertical;