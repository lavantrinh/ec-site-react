import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
function FilterByPrice(props) {
    return (
        <div>
             <Card className='my-5 border-end-0 border-start-0 rounded-0'>
      <Card.Header id='NavCard' className='fw-bold text-white rounded-0'>LỌC THEO GIÁ BÁN</Card.Header>
      <ListGroup variant="flush">
                    <ListGroup.Item>
                         <Form.Check 
            type={'checkbox'}
            id={'default-checkbox'}
            label={'2.000.000~5.0000.0000'}
          />
        </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check 
            type={'checkbox'}
            id={'default-checkbox'}
            label={'5.000.000~8.0000.0000'}
          />
        </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check 
            type={'checkbox'}
            id={'default-checkbox'}
            label={'8.000.000~10.0000.0000'}
          />
                    </ListGroup.Item>
                    <ListGroup.Item><Form.Check 
            type={'checkbox'}
            id={'default-checkbox'}
            label={'10.000.000~15.0000.0000'}
          /></ListGroup.Item>
                     <ListGroup.Item><Form.Check 
            type={'checkbox'}
            id={'default-checkbox'}
            label={'15.000.000~20.0000.0000'}
          /></ListGroup.Item>
      </ListGroup>
    </Card>
        </div>
    );
}

export default FilterByPrice;