import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
function ProductPagination(props) {
    return (
     
        <div>
  <Pagination size="md" className="d-flex justify-content-center">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
           <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        </div>

     
     
    );
}

export default ProductPagination;