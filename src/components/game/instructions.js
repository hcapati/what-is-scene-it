import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Instructions extends Component {

    render() {
        return (
            <div className="instructions-page">
                <div className='container instructions-container'>
                    <h1 className='display-3'> How To Play What Is Scene It? </h1>
                    <p className="instructions">
                        What Is Scene It? is a fun game testing your knowledge on trivia. Each card represents the points you can earn or lose!
                        Choose cards by category name.
                        The difficulty of the cards increases as points increase. Some cards have multiple choice options and others will have
                        a fill in the blank. Caution: You must answer fill-ins perfectly ** don't forget to add "The" if needed **. When all
                        cards are chosen, the game ends.
                        Have fun!
                    </p>
                    <Link to='/game' className="btn btn-primary instructions-button">Play Game!</Link>
                </div>
            </div>
        );
    }
}

export default Instructions;