import React , { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';



class SocialProfile extends Component {
    render() {

        const {title, link, image} = this.props.socialProfile;

        return (
            <div>
           <a href={link}> <img src={image} alt = {title} /> </a>
            </div>
        )
    }
}




class SocialProfiles extends Component {
    render() {
        return (
            <div>
            <h2>Connect with me!</h2>
            <div>
               {
                   SOCIAL_PROFILES.map( SOCIAL_PROFILE => {
                    return (
                        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>                    
                        );
                   })
                   }
            </div>
            </div>
        )
    }
}

export default SocialProfiles;