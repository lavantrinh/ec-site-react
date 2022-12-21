import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import EditProductModal from '../Admin/EditProductModal'
function ProductTable(props) {
    let { ProductList } = props;
    let items = "";
    items = ProductList.map((product, index) => {
        return (
 <tr key={index}>
                    <td>{product.productID}</td>
                <td>{ product.catalog.name}</td>
                    <td>{product.maker.makerName}</td>
                <td>{ product.productName }</td>
                    <td>{product.description}</td>
                <td>{ product.price}</td>
                    <td>{product.sale_price}</td>
                <td>{product.content.slice(0,80) }....</td>
                    <td className='text-center'><Image src={"../img/" + product.image} width="50"/></td>
                    <td><EditProductModal/></td>
                    <td><Button variant="outline-danger">Xóa</Button></td>

                </tr>

        )
    })
    return (
        <Table striped bordered hover>
            <thead className='bg-success text-white'>
                <tr>
                    <th>ID</th>
                    <th>Loại hàng</th>
                    <th>Nhà SX</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Giá Sale</th>
                    <th>Chi tiết</th>
                    <th>Ảnh sản phẩm</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
               {items}
            </tbody>
        </Table>
    );
}

export default ProductTable;