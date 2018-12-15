import React from 'react';
import { connect } from 'react-redux'

// hard code list of high scores - top 10

const HighScores = (props) => {
    return (
        <div>
            <h1>High Scores</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>High Score</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user.sort((a, b) => Math.max(...b.scoreHistory) - Math.max(...a.scoreHistory)).map((user, index) =>
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{user.username}</td>
                            <td>{Math.max(...user.scoreHistory)}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}

const mapStateToProps = state => ({
    user: state.users
})

export default connect(mapStateToProps)(HighScores);