import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../assets/menu_icon.svg';

const Header = ({ children }) => {
    const style = {display: 'inline-block', margin: 10, marginBottom: 5};
    return(
        <div>
             <div class='navMenu'>
             {/* <h3 style={style}><Link to='/'>Home</Link></h3>
             <h3 style={style}><Link to='/about'>About</Link></h3>
              <h3 style={style}><Link to='/projects'>Highlighted Projects</Link></h3>
               <h3 style={style}><Link to='/Contact'>Contact</Link></h3>
              <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
              <h3 style={style}><Link to='/music-master'>Music Master</Link></h3> */}
              <img src={navIcon} alt = 'menu' style={{width : 30, height : 30}} />
             </div> 

        {children}
        </div>
    )
   
}

export default Header;