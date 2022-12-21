import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
function FilterByMaker(props) {
  let { CheckList, MakerList } = props;
  const [checked, setChecked] = useState([]);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);

  };
  // use Effect: khi checkbox thay doi=>truyen ds checkbox ve Container
  useEffect(() => {
    CheckList(checked);
  }, [checked]);

  let items = "";
  items = MakerList.map((maker, index) => {
    return (

      <ListGroup.Item key={index}>
        <Form.Check
          type={'checkbox'}
          id={'default-checkbox'}
          label={maker.makerName} value={maker.makerID} onChange={handleCheck}
        />
      </ListGroup.Item>
    )
  });

  return (
    <div>


      <Card className='my-5 border-end-0 border-start-0 rounded-0'>
        <Card.Header id='NavCard' className='fw-bold text-white rounded-0'>LỌC THEO NHÀ SẢN XUẤT</Card.Header>
        <ListGroup variant="flush">
          {items}
        </ListGroup>
      </Card>



    </div>
  );
}

export default FilterByMaker;