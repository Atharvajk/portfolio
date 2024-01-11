import React from 'react'
import './customcss/Intropage.css'
import Mytypewritter from '../Components/TypeWriting'
import Particlebg from '../Components/Particlebg'
import profileimage from '../images/profileimage.png'
import profileimg from '../images/profileimg.png'
import dotpattern from '../images/dotpattern.png'
// import Particlebg from '../Components/Particlebg'
function Intropage() {
  return (
    <div className='intropagediv' >
      
        <div className='leftdiv'>
          <div className="leftdivinfo">

        <h2 className='introname'>Hey there! I'm <span>Atharva Khodke</span></h2>
        <Mytypewritter />
        <br />
        <button className = "mybutton contactbut" href="">Contact me</button>
        <button className = "mybutton downloadbut" href="">Download Resume</button>
          </div>
        </div>
        <div className='rightdiv'>
        <div className="profimgdiv">

        <img style={{zIndex:"2",}} src={profileimg} alt="" height="650px" />
        {/* <img  src={dotpattern} alt="" height="650px" /> */}
        </div>
        {/* <div className='dotdiv'>

        <span class=" profileimgdot"></span>
        </div> */}
        </div>

    </div>
  )
}

export default Intropage