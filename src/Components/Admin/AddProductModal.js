import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function AddProductModal(props) {
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
       <>
      <Button variant="outline-primary" onClick={handleShow}>
       Thêm mới 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>THÊM MỚI SẢN PHẨM</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {/* danh muc */}
             <Form.Label>Danh mục</Form.Label>
            <Form.Select aria-label="Default select example">
      <option>Chọn danh mục</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
            </Form.Select>
            {/* Nhà sản xuất */}
              <Form.Label>Nhà sản xuất</Form.Label>
            <Form.Select aria-label="Default select example">
      <option>Chọn nhà sản xuất</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
            </Form.Select>
            {/* Tên sản phẩm */}
              <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control type="text" placeholder="Nhập tên sản phẩm" />
            {/* mô tả sản phẩm */}
             <Form.Label>Mô tả sản phẩm</Form.Label>
            <Form.Control type="text" placeholder="Nhập mô tả sản phẩm" />
            {/* giá bán */}
 <Form.Label>Giá bán</Form.Label>
            <Form.Control type="text" placeholder="Nhập giá bán" />
            {/* giá Sale */}
             <Form.Label>Giá Sale</Form.Label>
            <Form.Control type="text" placeholder="Nhập giá sale" />
            {/* chi tiết sản phẩm */}

             <Form.Label>Chi tiết sản phẩm</Form.Label>
         <Form.Control as="textarea" rows={3} />
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default AddProductModal;