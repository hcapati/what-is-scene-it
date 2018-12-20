import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { gameOver } from './../actions/actions'

const GameNav = (props) => {
    return ( 
        <div>
            <Link to='/instructions'> How to play </Link>
            <Link to='/results' onClick={props.gameOver}> Quit Game </Link>
            {/* <button onClick={props.gameOver}>x</button> */}
            <h5>Current Points: {props.points.inGamePts}</h5>
        </div>
     );
}

const mapStateToProps = state => ({
    points: state
})

const mapDispatchToProps= dispatch => ({
    gameOver: () => (dispatch(gameOver()))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameNav);