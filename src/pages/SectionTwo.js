import React from 'react'
import '../pages/customcss/Section2.css'
function SectionTwo() {
  return (
    <div className='SectionTwo' id='about'>
        <div className="whodiv">

        <h1 style={{ fontSize:"40px",fontFamily:"Georgia", textAlign:"center",color:"#5efc8d"}}>Who am I?</h1>
        <p style={{ fontSize:"25px",fontFamily:"cursive", textAlign:"center"}}>" I am a Third-year computer engineering student at Pune Institute of Computer Technology on a journey to transform ideas into digital realities.With a relentless pursuit of knowledge and a knack for innovation, I've honed my skills in various technologies and programming languages."</p>

        {/* <div className="info">
            <div className="infoleft">
            <ul>
                <li><i ></i> <strong>Birthdate:</strong> 15 April 2003</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Pronoun:</strong> He/Him</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +91 7666230695</li>
                <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> City : Pune</li>
                </ul>
            </div>
            <div className="inforight">
            <ul>
                <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 20</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> Pursuing Bachelors</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Email: </strong> atharva.j.khodke@gmail.com</li>
                <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
      </div>
        </div> */}
        </div>

    </div>
  )
}

export default SectionTwo