import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS= [
    {
        id:1,
        title: 'Example React Application',
        description: 'sample description',
        weblink: 'https://github.com/rachnbalani/portfolio',
        image: project1,
        github: 'https://github.com/rachnbalani/portfolio'
    },
    {
        id:2,
        title: 'Example React Application 2',
        description: 'sample description',
        weblink: 'https://github.com/rachnbalani/portfolio',
        image: project2,
        github: 'https://github.com/rachnbalani/portfolio'
    },
    {
        id:3,
        title: 'Artist Top Tracks',
        description: 'A fun app to see top 10 tracks by any artist. Used Spotify API, React.JS, Parcel',
        weblink: '/music-master',
        image: project3,
        github: 'https://github.com/rachnabalani/music-master'
    }
];

export default PROJECTS;