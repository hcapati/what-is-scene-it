import React from 'react';
import { Link } from 'react-router-dom';

const GameNav = () => {
    return ( 
        <div>
            <Link to='/instructions'> How to play </Link>
            <Link to='/results'> Quit Game </Link>
            <h5>Current Points: </h5>
        </div>
     );
}
 
export default GameNav;