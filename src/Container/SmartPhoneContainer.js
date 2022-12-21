import React, { useEffect, useState } from 'react';
import NavBarVertical from '../Components/Home/NavBarVertical';
// import FilterByMaker from '../Components/Home/FilterByMaker';
// import FilterByPrice from '../Components/Home/FilterByPrice';
import { Col, Container, Row } from 'react-bootstrap';
import SmartPhoneContent from '../Components/SmartPhone/SmartPhoneContent';
import { getCatalogListAPI } from '../API/CatalogAPI';
import { getProductListAPI } from '../API/ProductAPI';
function SmartPhoneContainer(props) {
    let [smartPhone, setSmartPhone] = useState([]);
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
            let smartphone = [];
            for (let index = 0; index < response.length; index++) {
                //kiem tra neu san pham la smartphone =>push vao mang smartphone
                if (response[index].catalog.catalogID === 1) {
                    smartphone.push(response[index]);
                }
            }
            setSmartPhone(smartphone);
        })
    };
    useEffect(() => {
        fetchCatalog();
        fetchProduct();
console.log(smartPhone);
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
                        <SmartPhoneContent SmartPhone={smartPhone} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SmartPhoneContainer;