import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getCatalogListAPI } from '../API/CatalogAPI';
import { getProductListAPI } from '../API/ProductAPI';
import NavBarVertical from '../Components/Home/NavBarVertical';
import FilterByMaker from '../Components/Home/FilterByMaker';
import FilterByPrice from '../Components/Home/FilterByPrice';
import LaptopContent from '../Components/Laptop/LaptopContent';
function LaptopContainer(props) {

      let [Laptop, setLaptop] = useState([]);
     let [catalogList, setCatalogList] = useState([]);
    //lay danh sach loai san pham
    let fetchCatalog = () => {
        getCatalogListAPI().then((response) => {
            setCatalogList(response);
        })
    };
    // lay danh sach san pham
    let fetchProduct = () => {
        getProductListAPI().then((response) => {
            // setProductList(response);
            let laptop = [];
            for (let index = 0; index < response.length; index++) {
                //kiem tra neu san pham la smartphone =>push vao mang smartphone
                if (response[index].catalog.catalogID === 3) {
                    laptop.push(response[index]);
                }
            }
            setLaptop(laptop);
        })
    };
     useEffect(() => {
        fetchCatalog();
        fetchProduct();

     }, []);
    
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={3} className="px-4">
                        <NavBarVertical Catalog={catalogList} />
                        {/* <FilterByMaker />
                        <FilterByPrice /> */}
                    </Col>
                    <Col xs={9} className="my-5">
                        <LaptopContent Laptop={Laptop} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LaptopContainer;