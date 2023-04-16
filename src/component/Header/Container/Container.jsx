import React, { useEffect, useState } from 'react';
import './Container.css'
import SingleData from '../../SingleData/SingleData';

const Container = () => {
  const[data, setData]=useState([]);
  useEffect(()=>{
fetch('fakeData.json')
.then(res=>res.json())
.then(data=>setData(data))

  },[])

  return (
    <div className='container'>
     
      <div className='blog-part'>
      {data.map(singledata=>( <SingleData
      
      key={singledata.id}
      singledata={singledata}
      >


      </SingleData>

        
      ))}

      </div>


      <div className='bookmark-part'>
        <h1>bookmark part</h1>
      </div>
    </div>
  );
};

export default Container;