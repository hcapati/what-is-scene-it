import React, { Component } from 'react';
import { connect } from 'react-redux'

class HighScores extends Component {
    state = {
        allScores: []
    }

    getAllScores = () => {
        let scores = []
        this.props.user.forEach(entry => {
            entry.scoreHistory.forEach(score => {
                scores.push({ score: score, player: entry.username });
            });
        });
        this.setState({
            allScores: scores
        });
    }

    componentWillMount() {
        this.getAllScores();
    }

    render() {
        return (
            <div className="topTenScores-container">
                <h1>Top 10 High Scores</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>High Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allScores.sort((a, b) => Math.max(b.score) - Math.max(a.score)).slice(0,10).map((user, index) => //sort through all players based on their top scores them display them in order top to last
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.player}</td>
                                <td>{Math.max(user.score)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}



const mapStateToProps = state => ({
    user: state.users
})

export default connect(mapStateToProps)(HighScores);