import React, {useState} from 'react'
import {CgMenuRight} from 'react-icons/cg'
import {IoMdClose} from 'react-icons/io'
import './navbar.scss'
import logo from '../../images/logo2.png'
import { scrollToSection } from '../utils/helper'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'



function Navbar() {
  const[mobileMenu, setMobileMenu]=useState(false);
  const menuItemClickHandler=(section)=>{
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  }
  return (
   <div className="top-navigation-bar">
    <div className="app-logo">
        <img src={logo} alt="" />
    </div>
    <div className="mobile-menu" onClick={()=>{
      setMobileMenu(!mobileMenu)
    }}>
      {mobileMenu?(
        <IoMdClose size={24}  className='close-btn'/>
      ):(
        <AiOutlineMenu size={24}  className='openNav-btn'/>
      )}
    </div>
    <div className={`navigation ${mobileMenu? "active":""}`}>
        <span className="navigation-item" onClick={()=>{menuItemClickHandler ("home")}}>HOME</span>
        <span className="navigation-item"  onClick={()=>{menuItemClickHandler ("skills")}} >SKILLS</span>
        <span className="navigation-item"  onClick={()=>{menuItemClickHandler ("portfolio")}} >PROJECTS</span>
        <span className="navigation-item"  onClick={()=>{menuItemClickHandler ("contact")}} >CONTACT</span>
    </div>
   </div>
  )
}

export default Navbar