import React from 'react';
import PROJECTS from '../data/projects';


//can only use this format of stateless functional components, when we dont have a state to the component. 
//The only pro of stateless functional compoenent style is that it's easy to read
const Project = props => {
        const {title, image, description, link} = props.project;

    return (
        <div style= {{display: 'inline-block', width: 200 , margin: 20}}>
        <h4> {title} </h4>
        <img src={image} alt = 'profile' style={{width : 200, height : 120}} />
        <p>{description}</p>
        <a href={link}> Github </a>
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
