import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Instructions extends Component {

    render() { 
        return (
        <div className='container'>
            <h1>How To Play What Is Scene It? </h1>
            <p>
                What Is Scene It? is a fun game testing your knowledge on trivia. Each card represents the point you can earn or lose!
                The difficulty of the cards increases as points increase. Some cards have multiple choice options and others will have 
                a fill in the blank. Caution: You must answer fill-ins perfectly ** don't forget to add "The" if needed **. When all
                the cards are chosen, the game ends. 
                Have fun! 
            </p>
            <Link to='/game'>Play Game!</Link>
        </div>
    );
    }
}
 
export default Instructions;