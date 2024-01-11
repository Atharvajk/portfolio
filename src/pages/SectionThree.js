import React from 'react'
import '../pages/customcss/SectionThree.css'
function SectionThree() {
  return (
    <div className="SectionThree">
        {/* <div className="sectionthreecontainer"> */}

        <div className='eduleft'>
            <h2 style={{ fontSize:"40px",fontFamily:"Georgia", color:"#5efc8d"}}>Education</h2> <br />
            <div class="education-item" >
            <span class="dot"></span>
                <h4>BE Computer Engineering</h4>
                <h5>2022-2025</h5>
                <p><em>SCTRs Pune Institue of Computer Technology, Pune</em></p>
                <p>Currently Pursuing CGPA- 8.25</p>
                </div>
            <div class="education-item" >
            <span class="dot"></span>
                <h4>Diploma || Computer Engineering</h4>
                <h5>2019-2022</h5>
                <p><em>Institute of Petrochemical Engineering, Lonere</em></p>
                <p>Passed CGPA - 9.63</p>
                </div>
            <div class="education-item" >
            <span class="dot"></span>
                <h4>SSC </h4>
                <h5>2018</h5>
                <p><em>KESDP English School,Mahad</em></p>
                <p>Passed Percentage - 81.40%</p>
                </div>
        </div>
        <div className="eduright">
            <h2 style={{ fontSize:"40px",fontFamily:"Georgia", color:"#5efc8d"}}>Experience</h2> <br />
            <div class="education-item" >
            <span class="dot"></span>
                <h4>Industrial Training Intern</h4>
                <h5>Duflon Pvt. Ltd </h5>
                <p><em>Dec 2023 - Jan 2024 · 1 mo</em></p>
                
                </div>
            <div class="education-item" >
            <span class="dot"></span>
                <h4>Web Development and designing Intern </h4>
                <h5>Oasis Infobyte · Internship</h5>
                <p><em>Aug 2023 - Sep 2023 · 2 mos</em></p>
                
                </div>
            <div class="education-item" >
            <span class="dot"></span>
                <h4>Web Development Traniee <br /> and Internship </h4>
                <h5>Acmegrade · Internship</h5>
                <p><em>May 2023 - Jul 2023 · 3 mos</em></p>
                
                </div>
        </div>
    </div>
        // </div>
  )
}

export default SectionThree