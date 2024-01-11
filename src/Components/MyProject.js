import React, { useState } from 'react';
import '../pages/customcss/ProjectSection.css'
function MyProject(props) {
  const [selectedProject, setSelectedProject] = useState(null);

      const openModal = (projectId) => {
        setSelectedProject(projectId);
      };
    
      const closeModal = () => {
        setSelectedProject(null);
      };
  return (
    <div className='myproject'>
      <div key={props.id} className="project project-card" onClick={() => openModal(props.id)}>
        <div>

        
          <img src={props.thumbnail} alt={props.name} />
          <h3>{props.name}</h3>
          <p>{props.shortdescription}</p>
        </div>
        </div>
        <div key={props.id} id={props.id} className={`modal ${selectedProject === props.id ? 'show' : ''}`}>
          <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
            <h2 >{props.name} <span ><a class="fa-solid fa-arrow-up-right-from-square" style={{color:"white"}} href={props.link} target='_blank' rel="noreferrer"></a></span> </h2>
            <div className="cont">
              <div className="modal-left">

            <img src={props.thumbnail} alt={props.name} />
              </div>
              <div className="modal-right">
              <h3 style={{color:'#5efc8d'}}>
                Project information
                </h3>
                <h5>Category : {props.category}
<br />Technologies Used : {props.techused}
                </h5>
                <br />
                <h4 style={{color:'#5efc8d'}}>
                About:  {props.name}
                </h4>
            <p>{props.longdescription} <br />Show on Github : <a href={props.link} target='_blank' rel="noreferrer"> Link</a> </p>
      
              </div>
            </div>
            
            
            {/* Project details and content go here */}
          </div>
          
        </div>
   
    </div>


    
 
  )
}

export default MyProject