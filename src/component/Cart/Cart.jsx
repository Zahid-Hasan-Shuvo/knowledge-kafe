import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

 let title ='';
  for(const singleCart of cart){
  title = singleCart.title;

  }
  return (
    <div className='cart'>
       <h3>bookmark Blog:{cart.length} </h3>
       <p>{title}</p>
    </div>
  );
};

export default Cart;