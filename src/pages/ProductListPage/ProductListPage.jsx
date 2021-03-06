import React from 'react';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import './ProductListPage.css';

function ProductListPage(props) {
  return (
    <>
      <h4>MARKETPLACE</h4>
      <div className='ProductListPage-grid'>
        {props.products.map(product =>
          <ProductListItem
            product={product}
            handleDeleteProduct={props.handleDeleteProduct}
            key={product._id}
          />
        )}
      </div>
    </>
  );
}

export default ProductListPage;