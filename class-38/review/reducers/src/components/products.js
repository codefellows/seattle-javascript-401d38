import React from 'react';
import { connect } from 'react-redux';

import { postData } from '../store/actions/sara-michael.js';

function Products(props) {

  const { products, postData } = props;

  return (
    <ul>
      {Object.keys(products).map((productKey, idx) => {
        return <li key={idx}>{products[productKey].name} : {products[productKey].quantity}</li>
      })}
      <button onClick={() => postData({
        key: (Object.keys(products).length - 1) + 1,
        value: { name: 'test2 value', quantity: 5 }
      })}>Add a Product</button>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = {
  postData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
