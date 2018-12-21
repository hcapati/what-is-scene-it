import React from 'react';
import { connect } from 'react-redux'

const ResultsItem = (props) => {
    return ( 
        <div className="userStats-container">
            <h2>{props.users.username}</h2> 
            <h3>Current Score: {props.users.scoreHistory[props.users.scoreHistory.length -1]}</h3>  
            <h1>Highest Score: {Math.max(...props.users.scoreHistory)}</h1>
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.currentUser
})
 
export default connect(mapStateToProps)(ResultsItem);