import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

 let title ='';
 let time=0;
  for(const singleCart of cart){
  title = singleCart.title;
  time=time+singleCart.time;

  }
  return (
    <div className='cart'>
      <h3> Spent time on read = {time} min</h3>
       <h3>bookmark Blog:{cart.length} </h3>
       <p>{title}</p>
    </div>
  );
};

export default Cart;