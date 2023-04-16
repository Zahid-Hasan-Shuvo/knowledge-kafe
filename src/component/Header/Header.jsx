import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
 
   <h3>Knowledge Cafe</h3> 
   
         <div>
         <a href="/shop">shop</a>
           <a href="/order">order</a>
           <a href="/login">login</a>
           <a href="/logout">logout</a>
         </div>
         
       </nav>
      
  );
};

export default Header;