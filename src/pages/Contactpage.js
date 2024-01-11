import React from 'react'
import '../pages/customcss/Contactpage.css'
function Contactpage() {
  return (
    <div className='Contactpage'>
    <h2 style={{ fontSize:"40px",fontFamily:"Georgia",textAlign:"center",marginTop:"20px", color:"#5efc8d "}} >Contact Me</h2>

<div class=" contact-box">
    <div class=" contact-area mb-3">
        <label class="form-label">Your name</label>
        {/* <input type="text" placeholder="Enter Your Name" /> */}
        <input type="text" id="from_name" name="from_name" class="form-control" placeholder="Enter Your Name" required=""/>
            </div>
            <div class=" contact-area  mb-3"><label class="form-label">Email</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="name@gmail.com" required=""/>
            </div>
            <div class=" contact-area  mb-3">
                <label class="form-label">Subject</label>
                <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" required=""/>
                </div>
                <div class="contact-area  mb-3">
                    <label class="form-label">Message</label>
                    <textarea id="message" name="message" class="form-control" placeholder="Write your Query here" cols="3" required=""></textarea>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto"><input class="btn" type="submit"/>
                        </div>
                        </div>
    </div>
  )
}

export default Contactpage