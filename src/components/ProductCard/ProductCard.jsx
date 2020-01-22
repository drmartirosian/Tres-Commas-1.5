import React from 'react';
import {Link} from 'react-router-dom';

function ProductCard({product}) {
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{product.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Description</dt>
          <dd>{product.description}</dd>
          <dt>Price</dt>
          <dd>${product.price}</dd>
        </dl>
      </div>
      <div className='panel-footer'>

        <div className='btn btn-primary'>
          <Link
          style={{color:'white'}}
          to='/market'
          >BACK</Link>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;