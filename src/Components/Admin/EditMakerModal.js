import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditMakerModal(props) {
    const [show, setShow] = useState(false);
    const [newMaker, setNewMaker] = useState("");
    let { updateMaker, id, MakerList } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(MakerList);
    let handleSave = () => {
        let maker = {
            makerID: id,
            makerName: newMaker
        }
//   MakerList[maker.makerID].makerName = newMaker.makerName;
        updateMaker(maker);
        setShow(false);
    };

    let setMakerByID = () => {
        for (let index = 0; index < MakerList.length; index++) {
            if (MakerList[index].makerID === id) {
                setNewMaker(MakerList[index].makerName);
              
            }

        }
    };
    useEffect(() => {

        setMakerByID();
    }, []);
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
              Sửa
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CẬP NHẬT NHÀ SẢN XUẤT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Tên nhà sản xuất</Form.Label>
                    <Form.Control type="text" value={newMaker} onChange={(event) => { setNewMaker(event.target.value); }} name='makerName' placeholder="Nhập tên nhà sản xuất" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditMakerModal;