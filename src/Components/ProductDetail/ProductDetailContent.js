import React from 'react';

function ProductDetailContent(props) {
    let { ProductDetail } = props;
    console.log("detail", ProductDetail);
    
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: ProductDetail.content }} />
           
        </>
    );
}

export default ProductDetailContent;