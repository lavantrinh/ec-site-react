import React, { useEffect, useState } from 'react';

import { getMakerAPI } from '../API/MakerAPI';
import { getCatalogListAPI } from '../API/CatalogAPI';
import AdminAddProductForm from '../Components/Admin/AdminAddProductForm';
import { addNewProductAPI, addNewProductImageAPI } from '../API/ProductAPI';
function AdminAddProductContainer(props) {

    let [MakerList, setMakerList] = useState([]);
    let [catalogList, setCatalogList] = useState([]);

    let createProduct = (product, productimage) => {
       
        let productImageNew = {};
        addNewProductAPI(product).then((res) => {
            productImageNew.productID = res.productID;
            productImageNew.imageURL1 = productimage.imageURL1;
            productImageNew.imageURL2 = productimage.imageURL2;
            productImageNew.imageURL3 = productimage.imageURL3;
            productImageNew.imageURL4 = productimage.imageURL4;
            productImageNew.imageURL5 = productimage.imageURL5;
            productImageNew.imageDetail1 = productimage.imageDetail1;
            productImageNew.imageDetail2 = productimage.imageDetail2;
            productImageNew.imageDetail3 = productimage.imageDetail3;
            productImageNew.imageDetail4 = productimage.imageDetail4;
             productImageNew.imageDetail5 = productimage.imageDetail5;
            console.log(productImageNew);
            addNewProductImageAPI(productImageNew).then(() => {
                alert("Đã thêm thành công!!")
                window.location.href = "/admin";
            })
            
        })
    }
   
    // lay danh sach maker
    let fetchMaker = () => {
        getMakerAPI().then((res) => {
            setMakerList(res);
        })
    };
    //lay danh sach loai san pham
    let fetchCatalog = () => {
        getCatalogListAPI().then((response) => {

            setCatalogList(response);

        })
    };
   
    useEffect(() => {
        fetchCatalog();
        fetchMaker();
    }, []);


    
    return (
        <AdminAddProductForm MakerList={MakerList} catalogList={catalogList} createProduct={createProduct}/>
    );
}

export default AdminAddProductContainer;