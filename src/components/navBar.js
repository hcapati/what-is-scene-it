import React from 'react';
import { Link } from 'react-router-dom';

// landing page - nav options: log-in, sign-up 
// nav options: log-out, results page, start game 

const Navbar = () => {
    return ( 
        <div>
            <div>
                <Link to='/game'>Start Game</Link>
                <Link to='/results'>Results</Link>
                <Link to='/'>Log-out</Link>
            </div>
        </div>
     );
}
 
export default Navbar;