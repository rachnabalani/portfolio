import React from 'react';


const Artist = ({ artist }) => {
if(!artist) return null;

    const {images , name , followers, genres } = artist;

    return (
        <div>
        <img 
        src={images[0] && images[0].url} 
        alt='artist-profile'
        style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            objectFit: 'cover',
            margin: 30
            }} 
        />
        <h3> {name} </h3>
        <p> {followers.total} followers </p>
        <p> <strong>Genre: </strong> {genres.join(', ')}</p> 
        </div>
    )

}

export default Artist;