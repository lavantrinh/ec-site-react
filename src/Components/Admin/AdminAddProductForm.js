import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
function AdminAddProductForm(props) {
     let [catalogID, setcatalogID] = useState([]);
    let [makerID, setmakerID] = useState([]);
    let [productName, setproductName] = useState([]);
    let [price, setprice] = useState([]);
    let [sale_price, setsale_price] = useState([]);
    let [content, setcontent] = useState([]);
    let [image, setimage] = useState([]);
    let [image1, setimage1] = useState([]);
    let [image2, setimage2] = useState([]);
    let [image3, setimage3] = useState([]);
    let [image4, setimage4] = useState([]);
     let [image5, setimage5] = useState([]);
    let [description, setdescription] = useState([]);
    let { MakerList, catalogList } = props;
     let { createProduct } = props;
     //handle click

    let handleCreate = () => {
        let product = {
            catalogID: catalogID,
            makerID: makerID,
            productName: productName,
            price: price,
            sale_price: sale_price,
            content: content,
            image:image.substr(12),
            image_detail: image,
            description:description
        }
        let productimage = {
            imageURL1:image1.substr(12),
            imageURL2:image2.substr(12),
            imageURL3:image3.substr(12),
            imageURL4:image4.substr(12),
            imageURL5:image5.substr(12),
            imageDetail1: image1,
            imageDetail2: image2,
            imageDetail3: image3,
            imageDetail4: image4,
            imageDetail5:image5,
        }
        createProduct(product, productimage);
    }
        let items = "";
    items = MakerList.map((maker, index) => {
        return (
            <option key={index} value={maker.makerID}>{maker.makerName}</option>
        )
    })
    let catalog = "";
    catalog = catalogList.map((item, index) => {
        return (
            <option key={index} value={item.catalogID}>{item.name}</option>
        )
    })
    return (
       <Container>
            <Row className='my-3'>
                <h4 className='text-center'>THÊM MỚI SẢN PHẨM</h4>
                <Col xs={6} xl={6} md={6}>
                    {/* danh muc */}
                    <Form.Label>Danh mục</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => { setcatalogID(event.target.value); }}>
                        <option>Chọn danh mục</option>
                        {catalog}
                    </Form.Select>
                    {/* Nhà sản xuất */}
                    <Form.Label>Nhà sản xuất</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => { setmakerID(event.target.value); }}>
                        <option>Chọn nhà sản xuất</option>
                        {items}
                    </Form.Select>
                    {/* Tên sản phẩm */}
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control type="text" value={productName} placeholder="Nhập tên sản phẩm" onChange={(event) => { setproductName(event.target.value); }}/>
                    {/* mô tả sản phẩm */}
                    <Form.Label>Mô tả sản phẩm</Form.Label>
                    <Form.Control type="text" value={description} placeholder="Nhập mô tả sản phẩm" onChange={(event) => { setdescription(event.target.value); }}/>
                    {/* giá bán */}
                    <Form.Label>Giá bán</Form.Label>
                    <Form.Control type="text"value={price} placeholder="Nhập giá bán" onChange={(event) => { setprice(event.target.value); }}/>
                    {/* giá Sale */}
                    <Form.Label>Giá Sale</Form.Label>
                    <Form.Control type="text" placeholder="Nhập giá sale" value={sale_price} onChange={(event) => { setsale_price(event.target.value); }}/>
                    <Form.Label>Ảnh sản phẩm</Form.Label>
                    <Form.Control type="file" placeholder="Ảnh sản phẩm" value={image} onChange={(event) => { setimage(event.target.value); }}/>
                </Col>
                <Col xs={6} xl={6} md={6}>
                    {/* Anh bia san pham */}

                    <Form.Label>Ảnh sản phẩm</Form.Label>
                    <Form.Control type="file" placeholder="Ảnh sản phẩm" value={image1} onChange={(event) => { setimage1(event.target.value); }}/>
                    <Form.Label>Ảnh sản phẩm</Form.Label>
                    <Form.Control type="file" placeholder="Ảnh sản phẩm" value={image2} onChange={(event) => { setimage2(event.target.value); }}/>
                    <Form.Label>Ảnh sản phẩm</Form.Label>
                    <Form.Control type="file" placeholder="Ảnh sản phẩm" value={image3} onChange={(event) => { setimage3(event.target.value); }}/>
                    <Form.Label>Ảnh sản phẩm</Form.Label>
                    <Form.Control type="file" placeholder="Ảnh sản phẩm" value={image4} onChange={(event) => { setimage4(event.target.value); }}/>
                    <Form.Label>Ảnh sản phẩm</Form.Label>
                    <Form.Control type="file" placeholder="Ảnh sản phẩm" value={image5} onChange={(event) => { setimage5(event.target.value); }}/>

                    {/* chi tiết sản phẩm */}

                    <Form.Label>Chi tiết sản phẩm</Form.Label>
                  <Form.Control
          as="textarea"
          placeholder="Chi tiết sản phẩm" value={content} onChange={(event) => { setcontent(event.target.value); }}
          
        />
                    <Button variant="primary" type="submit" onClick={handleCreate}>
                        Submit
                    </Button>
                </Col>
            </Row>



        </Container>
    );
}

export default AdminAddProductForm;