import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProductDetailPage(props) {
  const product = props.location.state.product;
  return (
    <>
      <h4>Product Details</h4>
      <ProductCard
        key={product._id}
        product={product}
      />
    </>
  );
}

export default ProductDetailPage;