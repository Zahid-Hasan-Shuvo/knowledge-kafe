import React, { useEffect, useState } from 'react';
import './Container.css'
import SingleData from '../../SingleData/SingleData';
import Cart from '../../Cart/Cart';

const Container = () => {
  const[data, setData]=useState([]);
  const[cart, setCart]=useState([]);
  const[time, setTime]=useState(0);

  useEffect(()=>{
fetch('fakeData.json')
.then(res=>res.json())
.then(data=>setData(data))

  },[])

 const totalTime =()=>{
  const newTime=[...time, singledata];
  setTime(newTime)

 }
  const handleAddToBookmark=(singledata)=>{
const newCart=[...cart, singledata];

setCart(newCart);
  }

  return (
    <div className='container'>
      <div className='blog-part'>
      {data.map(singledata=>( <SingleData

handleAddToBookmark={handleAddToBookmark}
      key={singledata.id}
      singledata={singledata}
      >


      </SingleData>

        
      ))}

      </div>


      <div className='bookmark-part'>
       <Cart cart={cart}></Cart>
       
      </div>
    </div>
  );
};

export default Container;