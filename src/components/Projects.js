import React from 'react';
import PROJECTS from '../data/projects';
import external from '../assets/externalIcon.png';
import githubIcon from '../assets/github_icon.png';
import { Link } from 'react-router-dom';


//can only use this format of stateless functional components, when we dont have a state to the component. 
//The only pro of stateless functional compoenent style is that it's easy to read
const Project = props => {
        const {title, image, description, tech, weblink, github } = props.project;

    return (
        <div style= {{display: 'inline-block', width: 350 , margin: 20}}>
        <h3> {title} </h3>
        <Link to={weblink} target="_blank"> <img src={image} alt = 'project-image' style={{width : 280, height : 220}} /> </Link>
         <h4>{description}</h4>
        <h5>tech stack: {tech} </h5>
       
        <Link to={weblink} target="_blank"> <img src={external} style= {{ width: 18 , margin: 2}}/>  </Link>
         <a href={github} target="_blank">  <img src={githubIcon} style= {{ width: 25 , margin: 4}}/> </a>
        
        </div>
    )
     
}




const Projects = () => (
    <div>
    <h2>Highlighted Projects</h2>
    <div>
        {
        PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT}/>                    
            ))
        }
    </div>
    </div>
)

export default Projects;
