import React, { useEffect, useState } from 'react';
import './Container.css'
import SingleData from '../../SingleData/SingleData';

const Container = () => {
  const[data, setData]=useState([]);
  const[cart, setCart]=useState([]);
  useEffect(()=>{
fetch('fakeData.json')
.then(res=>res.json())
.then(data=>setData(data))

  },[])

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
        <h3>bookmark Blog:{cart.length} </h3>
      </div>
    </div>
  );
};

export default Container;