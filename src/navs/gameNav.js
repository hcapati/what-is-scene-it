import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { gameOver } from './../actions/actions'

const GameNav = (props) => {
    return ( 
        <div>
            <Link to='/instructions' className='btn btn-outline-primary nav-btn'> How to play </Link>
            <Link to='/results' className='btn btn-outline-primary nav-btn' onClick={props.gameOver}> Quit Game </Link>
            <div className="points-container">
                <h3> Current Points: {props.points.inGamePts} </h3>
            </div>
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