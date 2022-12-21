import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBarVertical from '../Components/Home/NavBarVertical';
import FilterByMaker from '../Components/Home/FilterByMaker';
import FilterByPrice from '../Components/Home/FilterByPrice';
import { getCatalogListAPI } from '../API/CatalogAPI';
import { getProductListAPI } from '../API/ProductAPI';
import TabletContent from '../Components/Tablet/TabletContent';
function TabletContainer(props) {
  let [Tablet, setTablet] = useState([]);
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
            let tablet = [];
            for (let index = 0; index < response.length; index++) {
                //kiem tra neu san pham la smartphone =>push vao mang smartphone
                if (response[index].catalog.catalogID === 2) {
                    tablet.push(response[index]);
                }
            }
            setTablet(tablet);
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
                        <TabletContent Tablet={Tablet} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TabletContainer;