import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <div>
                <Link className="btn btn-outline-primary" to='/game'>Start Game</Link>
                <Link className="btn btn-outline-primary" to='/results'>Results</Link>
                <Link className="btn btn-outline-primary" to='/'>Log-out</Link>
            </div>
        </div>
     );
}
 
export default Navbar;