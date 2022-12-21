import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getCatalogListAPI } from '../API/CatalogAPI';
import { getProductListAPI } from '../API/ProductAPI';
import NavBarVertical from '../Components/Home/NavBarVertical';
import FilterByMaker from '../Components/Home/FilterByMaker';
import FilterByPrice from '../Components/Home/FilterByPrice';
import SmartWatchContent from '../Components/SmartWatch/SmartWatchContent';
function SmartWatchContainer(props) {
     let [SmartWatch, setSmartWatch] = useState([]);
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
            let smartwatch = [];
            for (let index = 0; index < response.length; index++) {
                //kiem tra neu san pham la smartphone =>push vao mang smartphone
                if (response[index].catalog.catalogID === 4) {
                    smartwatch.push(response[index]);
                }
            }
            setSmartWatch(smartwatch);
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
                        <SmartWatchContent SmartWatch={SmartWatch} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SmartWatchContainer;