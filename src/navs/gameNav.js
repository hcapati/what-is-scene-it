import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GameNav = (props) => {
    return ( 
        <div>
            <Link to='/instructions'> How to play </Link>
            <Link to='/results'> Quit Game </Link>
            <h5>Current Points: {props.points.inGamePts}</h5>
        </div>
     );
}

const mapStateToProps = state => ({
    points: state
})

export default connect(mapStateToProps)(GameNav);