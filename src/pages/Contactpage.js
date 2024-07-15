import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../pages/customcss/Contactpage.css';

function Contactpage() {
  const [formData, setFormData] = useState({
    from_name: '',
      from_email: '',
      from_phone: '',
      message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({
      publicKey: "ZDy9BuAAwzMd4vwn5",
    });
    //console.log(formData);
    emailjs.send("service_dww8k8h", "template_4vow88m", formData, 'ZDy9BuAAwzMd4vwn5')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });

    setFormData({
      from_name: '',
      from_email: '',
      from_phone: '',
      message: '',
    });
  };

  return (
    <div className='Contactpage' id="contact">
      <h2 style={{ fontSize: "40px", fontFamily: "Georgia", textAlign: "center", marginTop: "20px", color: "#5efc8d" }}>Contact Me</h2>
      <div className="contact-box">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-area mb-3">
            <label className="form-label">Your name</label>
            <input type="text" id="from_name" name="from_name" className="form-control" placeholder="Enter Your Name" required value={formData.from_name} onChange={handleChange} />
          </div>
          <div className="contact-area mb-3">
            <label className="form-label">Email</label>
            <input type="email" id="from_email" name="from_email" className="form-control" placeholder="name@gmail.com" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="contact-area mb-3">
            <label className="form-label">Phone</label>
            <input type="text" id="from_phone" name="from_phone" className="form-control" placeholder="Enter Phone Number" required value={formData.phone} onChange={handleChange} />
          </div>
          <div className="contact-area mb-3">
            <label className="form-label">Message</label>
            <textarea id="message" name="message" className="form-control" placeholder="Write your Query here" cols="3" required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <input className="btn" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactpage;