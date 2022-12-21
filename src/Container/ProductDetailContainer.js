import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBarVertical from '../Components/Home/NavBarVertical';
import FilterByMaker from '../Components/Home/FilterByMaker';
import FilterByPrice from '../Components/Home/FilterByPrice';
import { getCatalogListAPI } from '../API/CatalogAPI';
import { useParams } from 'react-router-dom';
import { getProductByIDAPI, getProductImageByProductID } from '../API/ProductByIDAPI';
import Carousel from '../Components/ProductDetail/DetailCarousel';

import ProductDetailContent from '../Components/ProductDetail/ProductDetailContent';
function ProductDetailContainer(props) {
    const { id } = useParams();
    // khai bao state
    let [catalogList, setCatalogList] = useState([]);
    let [productDetail, setProductDetail] = useState([]);
    let [productImage, setProductImage] = useState([]);
    // lay danh sach catalog
    let fetchCatalog = () => {
        getCatalogListAPI().then((response) => {

            setCatalogList(response);

        })
    };
    //lay thong tin san pham theo id

    let fetchProductDetail = () => {
        getProductByIDAPI(id).then((response) => {
            setProductDetail(response);
        })
    };
    // lay danh sach image cua san pham
    let fetchProductImage = () => {
        getProductImageByProductID(id).then((response) => {
            setProductImage(response);
        })
    }

    console.log("productDetail", productDetail);
    console.log("images", productImage);
    // useEffect
    useEffect(() => {
        fetchCatalog();
        fetchProductDetail();
        fetchProductImage();

    }, []);
    return (
        <Container>

            <Row>
                <Col xs={3} sm={3} xl={3} className="px-4">
                    <NavBarVertical Catalog={catalogList} />
                   
                </Col>
                <Col xs={9} sm={9} xl={9} className="my-5">

                    <Container>
                        <Row>
                            <Col xs={5} md={5} sm={5} xl={5}>
                                <Carousel ProductImage={productImage} />
                            </Col>
                            <Col xs={7} md={7} sm={7} xl={7}>
                                <h4 className='mb-0'>{productDetail.productName}</h4>
                                <p className='mt-0'>{productDetail.description}</p>
                                <ProductDetailContent ProductDetail={productDetail} />
                                <Button variant="danger"> <i className="bi bi-cart-plus fw-bold"></i> Thêm vào giỏ hàng</Button>
                            </Col>
                        </Row>
                    </Container>


                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetailContainer;