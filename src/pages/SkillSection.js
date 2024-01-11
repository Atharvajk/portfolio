import '../pages/customcss/SkillSection.css'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SkillSection() {
  return (
    <div className='SkillSection'>
        <div className="skillcontainer">
        {/* <h2 style={{ fontSize:"40px",fontFamily:"Georgia",textAlign:"center",marginTop:"20px", color:"#5efc8d "}} >What Sets Me Apart?</h2> */}
        <h2 style={{ fontSize:"40px",fontFamily:"Georgia",textAlign:"center",marginTop:"20px", color:"#5efc8d "}} >What I Bring to the Table?</h2>
        <h4 style={{ fontSize:"30px",textAlign:"center",marginTop:"20px"}}>Skills</h4>
        <div className="skillicons">
          <Marquee gradient="True" gradientColor='rgb(3, 3, 73)'>

         
          <div className="skill-btn">
        <span className="btn-gradient"><i className="fa-brands fa-react"></i></span><span className="btn-text">React</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient">
            <i className="fa-brands fa-java"></i>
        </span><span className="btn-text">Java</span>
    </div>

    {/* Other buttons with updated class names and className */}
    
    <div className="skill-btn">
        <span className="btn-gradient"><i className="fab fa-react"></i></span><span className="btn-text">React</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fab fa-python"></i></span><span className="btn-text">Python</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fa-solid fa-c"></i></span><span className="btn-text">++</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fab fa-js-square"></i></span><span className="btn-text">MERN</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fab fa-php"></i></span><span className="btn-text">PHP</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fas fa-database"></i></span><span className="btn-text">XAMPP</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fab fa-github"></i></span><span className="btn-text">GitHub</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fas fa-cogs"></i></span><span className="btn-text">DSA</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fas fa-robot"></i></span><span className="btn-text">AI</span>
    </div>

    <div className="skill-btn">
        <span className="btn-gradient"><i className="fas fa-flask"></i></span><span className="btn-text">DataScience</span>
    </div>
</Marquee>

</div>
<br />
    {/* <h2 style={{ fontSize:"40px",fontFamily:"Georgia",textAlign:"center",marginTop:"20px", color:"#5efc8d "}} >What I Bring to the Table</h2> */}
    <h4 style={{ fontSize:"30px",textAlign:"center",marginTop:"20px"}}>Qualities</h4>

<div class="section">

    <div class="card">
      <h2>Innovative & Technical Skills</h2>
      <p>
        My passion for technology is fueled by a combination of innovative thinking and solid technical skills. I don't just code; I create solutions.
      </p>
    </div>

    <div class="card">
      <h2>Learning Ability</h2>
      <p>
        In the ever-evolving world of technology, I thrive on continuous learning. Each project is an opportunity to expand my knowledge and skills.
      </p>
    </div>

    <div class="card">
      <h2>Communication & Leadership</h2>
      <p>
        I excel not only in writing code but also in conveying ideas and leading teams. Effective communication is key to successful projects, and I take pride in my leadership abilities.
      </p>
    </div>
    <div class="card">
      <h2>Leadership Skills</h2>
      <p>
      As a team leader and project manager, I've successfully navigated the challenges of group projects. Collaboration, effective communication, and leadership have been my guiding principles.
      </p>
    </div>

  </div>


        </div>
    </div>
  )
}

export default SkillSection