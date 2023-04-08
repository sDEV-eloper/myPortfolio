import React from 'react'
import './intro.scss'
import cloud from '../../images/cloud.png'
import cloudSoft from '../../images/cloud-soft.png'
import Navbar from'./Navbar'
import IntroContent from './IntroContent'

function Intro() {
  return (
    <div className="Intro-section" id="home">
        <div className="vector-bg" id='parallax'></div>
        <img src={cloud} alt="" className='cloud'/>
        <img src={cloudSoft} alt="" className='cloud-soft'/>
        <div className="content">
            <Navbar/>
            <IntroContent/>
        </div>
    </div>
  )
}

export default Intro