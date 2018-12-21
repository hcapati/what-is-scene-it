import React, { Component } from 'react';
import GameNav from '../../navs/gameNav';

import Matrix from './matrix';

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