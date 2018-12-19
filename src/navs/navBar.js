import React from 'react';
import { Link } from 'react-router-dom';

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