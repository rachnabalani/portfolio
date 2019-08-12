import React, { Component } from 'react';

const TITLES = [
     'I am a software engineer',
    'I am a pop music lover',
    'I am an eager learner',
    'I am a hike lover',
    'I am a dog parent'
];

class Title extends Component {
    state = { 
        titleIndex: 0, 
        fadeIn : true
        };

    componentDidMount() {
        this.timeOut = setTimeout(() => this.setState({fadeIn: false}),2000);
        this.animateTitles();
    }

     componentWillUnmount() {
       clearInterval(this.titleInterval);
       clearTimeout(this.timeOut);
    }

    animateTitles = () => {
       this.titleInterval = setInterval( () => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length ;
            this.setState({ titleIndex, fadeIn: true});
             this.timeOut = setTimeout(() => this.setState({fadeIn: false}),2000);
        },4000);
    }

    render() {
        const {fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return(
            <div>
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}> {title} </p> 
            </div>
        )
    }
}


export default Title;