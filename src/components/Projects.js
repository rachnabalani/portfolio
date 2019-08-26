import React from 'react';
import PROJECTS from '../data/projects';
import external from '../assets/externalIcon.png';
import githubIcon from '../assets/github_icon.png';
import { Link } from 'react-router-dom';


//can only use this format of stateless functional components, when we dont have a state to the component. 
//The only pro of stateless functional compoenent style is that it's easy to read
const Project = props => {
        const {title, image, description, weblink, github } = props.project;

    return (
        <div style= {{display: 'inline-block', width: 200 , margin: 20}}>
        <h4> {title} </h4>
        <img src={image} alt = 'profile' style={{width : 200, height : 120}} />
        <p>{description}</p>
        <Link to={weblink} target="_blank"> <img src={external} style= {{ width: 25 , margin: 2}}/>  </Link>
         <a href={github} target="_blank">  <img src={githubIcon} style= {{ width: 25 , margin: 10}}/> </a>
        
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
