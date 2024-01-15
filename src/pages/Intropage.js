import React from 'react'
import './customcss/Intropage.css'
import Mytypewritter from '../Components/TypeWriting'
import Particlebg from '../Components/Particlebg'
import profileimage from '../images/profileimage.png'
import profileimg from '../images/profileimg.png'
import dotpattern from '../images/dotpattern.png'
import MyResume from "../Dowloadable/Atharva_Khodke_Resume.pdf"
// import Particlebg from '../Components/Particlebg'
function Intropage() {
  const downloadFile = () => {
    // Create an anchor element
    const anchor = document.createElement('a');
  
    // Set the href attribute to the file you want to download
    anchor.href = MyResume; // Replace with the actual path to your file
  
    // Set the download attribute with the desired filename
    anchor.download = MyResume; // Replace with the desired filename
  
    // Append the anchor to the body
    document.body.appendChild(anchor);
  
    // Trigger a click on the anchor element
    anchor.click();
  
    // Remove the anchor from the body
    document.body.removeChild(anchor);
  };
  return (
    <div className='intropagediv' >
      
        <div className='leftdiv'>
          <div className="leftdivinfo">

        <h2 className='introname'>Hey there! I'm <span>Atharva Khodke</span></h2>
        <Mytypewritter />
        <br />
        <div className="butdiv">

        <button className = "mybutton contactbut" href="">Contact me</button>
        

        <button  className = "mybutton downloadbut" href={MyResume} onClick={downloadFile}>Download Resume</button>
        
        </div>
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