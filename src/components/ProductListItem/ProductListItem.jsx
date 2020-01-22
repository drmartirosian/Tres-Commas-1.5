import React from 'react';
import {Link} from 'react-router-dom';
import './ProductListItem.css';

function ProductListItem({product, handleDeleteProduct}) {
  return (



    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{product.name}</h3>
      </div>
      <div className='panel-footer ProductListItem-action-panel'>
        <Link
          className='btn btn-primary'
          to={{
            pathname: '/details',
            state: {product}
          }}
        >
          DETAILS
        </Link>


        {/* {req.user ? : } */}
        <Link
          className='btn btn-success'
          to={{
            pathname: '/edit',
            state: {product}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-danger'
          onClick={() => handleDeleteProduct(product._id)}
        >
          DELETE
        </button>


        <Link
          className='btn btn-warning'
          to={{
            pathname: '/cart',
            state: {product}
          }}
        >
          Cart+
        </Link>



      </div>
    </div>


  );
}

export default ProductListItem;