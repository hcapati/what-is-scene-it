// shows trivia question and either audio, img, video snippet
// add or subtract from points 

import React, { Component } from 'react';
import axios from 'axios';


class Trivia extends Component {
    state = {
        question: {},
        answers: []
    }

    componentDidMount = () => {
        this.fetchQuestion();
    };

    fetchQuestion = () => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${this.props.match.params.categoryId}&difficulty=${this.props.match.params.valueId}`)
            .then(response => {
                this.setState({
                    question: response.data.results[0]
                }, () => this.getAnswers() );
            })
    };

    decodeHtml = (input) => {
        let question = new DOMParser().parseFromString(input, 'text/html');
        return question.documentElement.textContent;
    };     

    getAnswers = () => {
        this.state.question.incorrect_answers.push(this.state.question.correct_answer);
        let shuffled = this.state.question.incorrect_answers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        
        this.setState({
            answers: shuffled
        });
    };

    shuffleAnswers = (array) => {
        let shuffled = array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        this.setState({
            answers: shuffled
        })
    }

    render() {
        return (
            <div>
                <h1>Trivia Page</h1>
                <h1>{this.decodeHtml(this.state.question.question)}</h1>
                {}
            </div>
        );
    }
}

export default Trivia;