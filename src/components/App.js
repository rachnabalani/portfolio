import React , { Component } from 'react';
import Projects from './Projects';
import Title from './Title';
import SocialProfiles from './SocialProfiles';
import ProfilePic from '../assets/profilePhoto.png';

class App extends Component {
   constructor() {
       super();
       this.state = { displayBio: false};
       //this.toggleDisplayBio = this.toggleDisplayBio.bind(this); 
       //we did this so that the toggleDisplayBio method below can access 'this' which will then have acecss to 'setState' from Component class.
       // The toggleDisplayBio method on it's own doesn't have any meaning to 'this' keyword and it will throw an error "setState is undefined, this is undefined" 
       // so basically we are saying that take this toggleDisplayBio function of declared here (that is being said on the left side of the equal sign),
       // and then bind the "this" value to it. 
       //or, just convert the toggleDisplayBio function into a callback function. 
       //for that, comment the above line, and toggleDisplayBio() {this.setState... } now becomes
       // toggleDisplayBio = () => { this.setState... } 
       //the above callback works, because callbacks inherently contain reference to "this" keyword. 
       
   }

   toggleDisplayBio = () =>  
   {
       this.setState({ displayBio: !this.state.displayBio});
   }
   
    render () {
        return (
        <div class='portfolio'> 
            <img src={ProfilePic} alt='profile-photo' className="profilePic"/>
            <h1> Hello! </h1>
            <p> My name is Rachna. </p>
            <Title />
            <p> I'm always looking forward to working on meaningful projects </p>
            {  this.state.displayBio 
            ? 
            (
            <div>
            <p> I live in San Jose, CA </p>
            <p> My favourite languages are JavaScript and Java, and I think the React engine is pretty cool! </p>
            <p> Besides coding, I like listening to podcasts, playing with my puppy Mac, and hike around California </p>
             <button onClick={this.toggleDisplayBio}> Show Less </button>
             </div>
            )
            : 
            ( 
            <div>
            <button onClick={this.toggleDisplayBio}> Read more </button>
            </div>
            )
            }
        
            {/* <Projects /> */}
            <SocialProfiles />

        </div>
        )
    }
}

export default App;