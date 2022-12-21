import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AddMakerModal from '../Components/Admin/AddMakerModal';
import { getProductListAPI } from '../API/ProductAPI';
import { getMakerAPI, addNewMakerAPI, deleteMakerAPI, updateMakerAPI } from '../API/MakerAPI';
import MakerTable from '../Components/Admin/MakerTable';
import ProductTable from '../Components/Admin/ProductTable';

function AdminContainer(props) {
    //khai bao state makerList
    let [MakerList, setMakerList] = useState([]);
    let [ProductList, setProductList] = useState([]);
    // xoa Maker theo ID truyen tu MakerTable ve
    let deleteMaker = (id) => {

        deleteMakerAPI(id).then(() => {
            alert("Đã xóa thành công!");
            let MakerList_ = [...MakerList];
            for (let index = 0; index < MakerList.length; index++) {
                if (MakerList[index].makerID === id) {
                    MakerList_.splice(index, 1);
                }
                setMakerList(MakerList_);
            }
        })
    };
    //sua maker theo ID
    let updateMaker = (makerUpdateNew) => {
        let id = makerUpdateNew.makerID;
        let makerUpdate = {
            makerName: makerUpdateNew.makerName,
        }
        console.log("du lieu nhan duoc", makerUpdate);
        updateMakerAPI(id, makerUpdate).then((res) => {
            let MakerListUpdate = [...MakerList];
            for (let index = 0; index < MakerListUpdate.length; index++) {
                if (MakerListUpdate[index].makerID === id) {
                    MakerListUpdate[index].makerName = makerUpdateNew.makerName;
                }
                setMakerList(MakerListUpdate);
            }
            alert("Cập nhật thành công!");
        })
    }

    //nhan du lieu tu Modal=>them vao database=>set lai state va re render 
    let makerName = (newMaker) => {
        addNewMakerAPI(newMaker).then((res) => {
            let CurrentMakerList = [...MakerList];
            CurrentMakerList.push(res);
            setMakerList(CurrentMakerList);
        });
    };
    // lay danh sach maker
    let fetchMaker = () => {
        getMakerAPI().then((res) => {
            setMakerList(res);
        })
    };

    //lay danh sach san pham

    let fetchProduct = () => {
        getProductListAPI().then((response) => {
            setProductList(response);
        })
    };
    useEffect(() => {
        fetchProduct();
        fetchMaker();
    }, []);
    return (
        <Container>
          
            <Row>
                <Card className='mt-5 px-0'>
                    <Card.Header className='text-center fw-bold'>DANH SÁCH SẢN PHẨM  <Button href='/admin/add-new-product' variant="outline-success">Thêm mới</Button></Card.Header>
                    <ProductTable MakerList={MakerList} ProductList={ProductList} />
                </Card>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={4}>
                     <Card className='mt-5'>
                    <Card.Header className='text-center'>DANH SÁCH NHÀ SẢN XUẤT <AddMakerModal makerName={makerName} /></Card.Header>
                    <MakerTable MakerList={MakerList} deleteMaker={deleteMaker} updateMaker={updateMaker} />
                </Card>
                </Col>
               
            </Row>
        </Container>
    );
}

export default AdminContainer;