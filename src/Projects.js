import React , { Component } from 'react';
import PROJECTS from './data/projects';



class Project extends Component {
    render() {

        const {image, description, link} = this.props.project;

        return (
            <div style= {{display: 'inline-block', width: 200 , margin: 20}}>
           <h4> {this.props.project.title} </h4>
           <img src={image} alt = 'profile' style={{width : 200, height : 120}} />
           <p>{description}</p>
           <a href={link}> Github </a>
            </div>
        )
    }
}




class Projects extends Component {
    render() {
        return (
            <div>
            <h2>Highlighted Projects</h2>
            <div>
               {
                   PROJECTS.map( PROJECT => {
                    return (
                        <Project key={PROJECT.id} project={PROJECT}/>                    
                        );
                   })
                   }
            </div>
            </div>
        )
    }
}

export default Projects;
