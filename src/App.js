import React , { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import ProfilePic from './assets/profilePhoto.png';

class App extends Component {
   constructor() {
       super();
       this.state = { displayBio: false};
       this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
   }

   toggleDisplayBio() 
   {
       this.setState({ displayBio: !this.state.displayBio});
   }
   
    render () {
        return (
        <div> 
            <img src={ProfilePic} alt='profile-photo' className="profilePic"/>
            <h1> Hello! </h1>
            <p> My name is Rachna and I'm a software engineer. </p>
            <p> I'm always looking forward to working on meaningful projects </p>
            {
                this.state.displayBio ? (
            <div>
            <p> I live in San Jose, CA </p>
            <p> My favourite language is JavaScript and Java, and I think the React engine is pretty cool! </p>
            <p> Besides coding, I like listening to podcasts, playing with my puppy Mac, and hike around California </p>
             <button onClick={this.toggleDisplayBio}> Show Less </button>
             </div>
        ): ( 
            <div>
            <button onClick={this.toggleDisplayBio}> Read more </button>
            </div>
        )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
        </div>
        )
    }
}

export default App;