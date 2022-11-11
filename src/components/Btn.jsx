import '../styles/Count.css';
import {  FaMoon , FaSun  } from 'react-icons/fa';
import { useState } from 'react';


export const Btn = () => {

  const[dark,setDark]=useState(false)

 return (
    <>
    <div   className={dark ? 'header':'light'}     
    >
          <div >
       <button className='theme-toggle'  onClick={()=>setDark(!dark)}> { dark ? 
        <FaSun size={20} className='sun'/>:
        <FaMoon size={20} className='moon'/> 
        }</button>
        </div>






        </div>



</>
)
}
