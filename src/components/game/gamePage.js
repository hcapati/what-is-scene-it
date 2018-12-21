import React, { Component } from 'react';
import GameNav from '../../navs/gameNav';

import Matrix from './matrix';

// Page renders game matrix of game cards, points counter, and navigation bar (sign-out, quit game)
// end game & quit game redirects to results page
// sign-out redirects to landing page

class GamePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="background-img">
                <div className="gameNav-container">
                    <GameNav />
                </div>
                <div className="container">
                    <Matrix />
                </div>
            </div>
         );
    }
}
 
export default GamePage;