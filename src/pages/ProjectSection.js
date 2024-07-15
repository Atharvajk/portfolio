import React, { useState } from 'react';
import '../pages/customcss/ProjectSection.css'
import project1 from '../images/project-images/BuyatBestPrice.png'
import project2 from '../images/project-images/QRollcall.png'
import MyProject from '../Components/MyProject'
function ProjectSection() {
    const projects = [
        { id: 'project1', name: 'Buy at Best Price', thumbnail: project1, category:"Software", techused:"Python, Tkinter, Web-Scrapping,BeautifulSoup, Matplotlib, SMTP",link:"https://github.com/Atharvajk/Buy_At_Best_Price" ,shortdescription:"Buy At Best Price : free, open source price tracking software for multi-tracking products from ecom websites and notifying user about prices.", longdescription:"We put forth Buy At Best Price Application that allows us to track price of product that we wish to buy. This project is an online application in which, we can track the price of the product by simply paste the link of that product in the link bar and then by clicking the search button. We can set the maximum price for that product at which we want to buy. It keeps tracking the price of the product in background and notify us by sending messages through notifications. If we want the alert to be in Email format, we can choose those options under setting menu, by providing further necessary information like email address and phone number. It also shows us the details of product on the dashboard. We can also see the graph of price from the time we added the product link to it. It better helps us to understand the day at which the minimum and maximum drop price of the product. Also, we can add the links of multiple products we wish to buy. It can also track the price of all products at a time. A price tracker is a technical solution that helps Online Buyers, track prices of competitors of online websites and dealers. It makes the process of tracking prices easier and less painful, and it also gives information to make pricing decisions." },
        { id: 'project2', name: 'QRollCall', thumbnail: project2, category:"Flutter App", techused:"Flutter, Dart, Node.js, JWT" ,link:"https://github.com/Atharvajk/QRollCall", shortdescription:"The QROLLCALL (QR Code Attendance System) project addresses the challenges faced by teachers and students in traditional attendance-taking methods.", longdescription:"The context of the project revolves around the inefficient and error-prone process of manually taking attendance in educational institutions. Teachers often rely on logbooks to record student attendance, leading to several issues such as misplaced records, difficulty in retrieving information, and the possibility of human error in marking attendance accurately. Conversely, students may experience the inconvenience of missing attendance due to oversight or accidental omission.  To tackle these problems, we have developed an application that utilizes QR code technology for attendance management. The solution involves students scanning a unique QR code generated by the teacher for each class session. By scanning the QR code using their smartphones or other devices, students can conveniently mark their attendance without relying on manual entry or written records. This approach eliminates the need for logbooks and significantly reduces the likelihood of errors.The application not only simplifies the attendance process for both teachers and students but also offers additional benefits. It allows for efficient data management, ensuring easy access to attendance records and minimizing the time required for administrative tasks. Furthermore, the system provides a reliable and secure means of attendance tracking, as QR codes can be customized and authenticated to prevent fraudulent activities."  },
      ];
      
  return (
    <div className="ProjectSection" id='projects'>
        {/* <img src={project1} alt={""} /> */}

        <h2 style={{ fontSize:"40px",fontFamily:"Georgia",textAlign:"center",marginTop:"20px", color:"#5efc8d "}} >My Projects</h2>
        <div className="myprojects">
           
            {/* Your portfolio project thumbnails */}
      {projects.map(project => (
        <MyProject id={project.id} name={project.name} thumbnail={project.thumbnail} shortdescription={project.shortdescription} longdescription={project.longdescription} category={project.category} techused={project.techused} link={project.link}></MyProject>
      ))}

        </div>
    </div>
  )
}

export default ProjectSection