import React, { Component } from 'react';
import ResultsItem from './resultsItem';
import HighScores from './highScores';
import NavBar from '../../navs/navBar';


class ResultsPage extends Component {
    state = {}
    render() {
        return (
            <div className="resultsPage-container">
                <NavBar />
                <div className="container">
                    <ResultsItem />
                    <HighScores />
                </div>

            </div>
        );
    }
}

export default ResultsPage