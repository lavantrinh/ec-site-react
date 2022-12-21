import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function AddMakerModal(props) {
    const [show, setShow] = useState(false);
    const [ newMaker, setNewMaker ] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    let { makerName } =props;
 
    let handleSave = () => {
        let maker = {
            makerName:newMaker
        }
        makerName(maker);
        setShow(false);
    };
   
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                <i className="bi bi-plus">NEW</i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>THÊM MỚI NHÀ SẢN XUẤT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Tên nhà sản xuất</Form.Label>
                    <Form.Control type="text" onChange={(event) => { setNewMaker(event.target.value); }} name='makerName' placeholder="Nhập tên nhà sản xuất" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Thêm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMakerModal;