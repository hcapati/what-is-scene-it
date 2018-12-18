import React, { Component } from 'react';
import NavBar from './../navBar';

import Matrix from './matrix';

// Page renders game matrix of game cards, points counter, and navigation bar (sign-out, quit game)
// end game & quit game redirects to results page
// sign-out redirects to landing page

class GamePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                <div>
                    <Matrix />
                </div>
            </div>
         );
    }
}
 
export default GamePage;