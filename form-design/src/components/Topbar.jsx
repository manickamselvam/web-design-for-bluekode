import React from 'react'
import './Topbar.css';

const Topbar = () => {
  return (
      <>
       <div className='topbar'>
           <div className='topbar-right'>Bluekode Digital</div>
           <div className='topbar-left'>
               <div className='topbar-left-item'>Startup Registration</div>
               <div className='topbar-left-item'>Manage Business</div>
               <div className='topbar-left-item'>Edf</div>
               <div className='topbar-left-item'>Leaves</div>
               <div className='topbar-left-item'>other service &#38; Registartion</div>
               <div className='topbar-left-item'>Services</div>
               <div className='topbar-left-item'>Blog</div>
               <div className='topbar-left-item'>Contact Us</div>
           </div>
       </div>
      </>
  )
}

export default Topbar