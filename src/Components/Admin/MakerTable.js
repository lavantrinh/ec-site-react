import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import EditMakerModal from './EditMakerModal';
function MakerTable(props) {
    let { MakerList, deleteMaker, updateMaker } = props;

    let handleDelete = (id) => {
    
        deleteMaker(id);
    }


    let items = "";
    items = MakerList.map((maker, index) => {
        return (
            <tr key={index}>

                <td>{maker.makerID}</td>
                <td>{maker.makerName}</td>
                <td>
                    <EditMakerModal id={maker.makerID} MakerList={MakerList} updateMaker={ updateMaker} />
                    {/* <Button variant="outline-warning">Sửa</Button> */}
                </td>
                <td>
                    <Button variant="outline-danger" onClick={()=>handleDelete(maker.makerID)}>Xóa</Button>
                </td>
            </tr>
        )
    });
    return (
        <div>

            <Table striped hover>
                <thead className='bg-success text-white'>
                    <tr>
                        <th>MakerID</th>
                        <th>Tên nhà sản xuất</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
        </div>
    );
}

export default MakerTable;