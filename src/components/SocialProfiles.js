import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';



const SocialProfile = props => {
    const { link, image} = props.socialProfile;

    return (
        <div style= {{display: 'inline-block', width: 25 , margin: 10}} >
        <a href={link}> <img src={image} alt = 'social-profile' style= {{width: 35 , margin: 15}}/> </a>
        </div>
    )
}




const SocialProfiles = () => (
    <div>
    <h3>Connect with me!</h3>
    <div>
        {
        SOCIAL_PROFILES.map( SOCIAL_PROFILE => (
            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>                    
            ))
        }
    </div>
    </div>
)
    

export default SocialProfiles;