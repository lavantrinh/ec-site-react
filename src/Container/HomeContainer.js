import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NewProduct from '../Components/Home/NewProduct';
import NavBarVertical from '../Components/Home/NavBarVertical';
import SmartPhoneCard from '../Components/Home/SmartPhoneCard';
import FilterByMaker from '../Components/Home/FilterByMaker';
import FilterByPrice from '../Components/Home/FilterByPrice';
import TabletCard from '../Components/Home/TabletCard';
import LaptopCard from '../Components/Home/LaptopCard';
import SmartWatchCard from '../Components/Home/SmartWatchCard';
import Footer from '../Components/Footer';
import { getMakerAPI } from '../API/MakerAPI';
import { getCatalogListAPI } from '../API/CatalogAPI';
import { getProductListAPI } from '../API/ProductAPI';
import ProductFilterContent from '../Components/ProductFilter/ProductFilterContent';
function HomeContainer(props) {

    //khai bao cac state
    let [catalogList, setCatalogList] = useState([]);
    let [productListTop4, setProductListTop4] = useState([]);
    // let [productList, setProductList] = useState([]);
    let [smartPhone, setSmartPhone] = useState([]);
    let [tablet, setTablet] = useState([]);
    let [laptop, setLaptop] = useState([]);
    let [smartWatch, setSmartWatch] = useState([]);
    ////////////////////////////////////////////
    let [productFilter, setProductFilter] = useState([]);
    let [FilterList, setFilterList] = useState([]);
    let [MakerList, setMakerList] = useState([]);
    let [ProductList, setProductList] = useState([]);
    let [show, setShow] = useState(true);
    let CheckList = (value) => {

        setFilterList(value);

    };
    //loc san pham theo maker
    let filterProduct = () => {
        let fiterArray = [];
        for (let index = 0; index < ProductList.length; index++) {

            for (let index1 = 0; index1 < FilterList.length; index1++) {
                if (ProductList[index].maker.makerID == FilterList[index1]) {
                    fiterArray.push(ProductList[index]);
                }

            }
            setProductFilter(fiterArray);
        }
    }
 


    // lay danh sach maker
    let fetchMaker = () => {
        getMakerAPI().then((res) => {
            setMakerList(res);
        })
    }

    /////////////////////////////////////////////////////
    //lay danh sach loai san pham
    let fetchCatalog = () => {
        getCatalogListAPI().then((response) => {

            setCatalogList(response);

        })
    };
    // lay danh sach san pham theo tung loai
    let fetchProduct = () => {
        getProductListAPI().then((response) => {
            setProductList(response);
            // setProductList(response);
            let top4 = [];
            let smartphone = [];
            let tabletArray = [];
            let laptopArray = [];
            let smartWatchArray = [];
            for (let index = 0; index < response.length; index++) {
                //kiem tra neu san pham la smartphone =>push vao mang smartphone
                if (response[index].catalog.catalogID === 1) {
                    smartphone.push(response[index]);
                }
                // neu san pham la may tinh bang => push vao mang tablet
                if (response[index].catalog.catalogID === 2) {
                    tabletArray.push(response[index]);
                }
                //neu san pham la laptop => push vao mang laptop
                if (response[index].catalog.catalogID === 3) {
                    laptopArray.push(response[index]);
                }
                // neu san pham la smartwatch
                if (response[index].catalog.catalogID === 4) {
                    smartWatchArray.push(response[index]);
                }
                //get 4 san pham moi dang
                if (index >= response.length - 4) {
                    top4.push(response[index]);
                }
            }
            setSmartPhone(smartphone);
            setTablet(tabletArray);
            setProductListTop4(top4);
            setLaptop(laptopArray);
            setSmartWatch(smartWatchArray);
        })
    };
    // console.log("catalog", catalogList);

    // console.log("smartphone", smartPhone);
    // console.log("tablet", tablet);
    // console.log("laptop", laptop);
    // console.log("smart watch", smartWatch);
    // console.log("product top 4", productListTop4);

    useEffect(() => {
        fetchCatalog();
        fetchProduct();
        fetchMaker();
    }, []);

    // khi gia tri loc thay doi->loc lai product, set lai gia tri show
    useEffect(() => {
        filterProduct();
        if (FilterList.length === 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [FilterList]);

    return (
        <div>
            <HomeCarousel />
            <Container>
                <NewProduct NewProduct={productListTop4}></NewProduct>
                <Row>
                    <Col xs={3} sm={3} xl={3} className="px-4">
                        <NavBarVertical Catalog={catalogList} />
                        <FilterByMaker CheckList={CheckList} MakerList={MakerList} />
                        <FilterByPrice />
                    </Col>
                    <Col xs={9} sm={9} xl={9} className="my-5">
                        {show
                            ? <>
                                <SmartPhoneCard SmartPhone={smartPhone} />
                                <TabletCard Tablet={tablet} />
                                <LaptopCard Laptop={laptop} />
                                <SmartWatchCard SmartWatch={smartWatch} />
                            </>
                            : null
                        }
                        {!show
                            ? <>
                                <ProductFilterContent productFilter={productFilter} />
                            </>
                            : null
                        }

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default HomeContainer;