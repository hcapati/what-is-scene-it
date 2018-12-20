import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { addPts, minusPts } from './../../actions/actions'
import loadingGif from './../../assets/loading.gif';

class Trivia extends Component {
    state = {
        question: {},
        answers: [],
        selectedAnswer: '',
        redirect: false,
        bool: true
    }

    componentDidMount = () => {
        this.fetchQuestion();
    };

    fetchQuestion = () => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${this.props.gameState.category}&difficulty=${this.props.gameState.difficulty}`)
            .then(response => {
                this.setState({
                    question: response.data.results[0]
                } , () => this.getAnswers());
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

    setAnswer = (e) => {
        this.setState({
            selectedAnswer: e.target.value,
        }, () => this.checkAnswer());
    }

    checkAnswer = () => {
        if (this.state.selectedAnswer === this.state.question.correct_answer){
            this.props.addPts(this.props.match.params.pointsId);
            this.setState({ 
                redirect: true,
                bool: false
            })
        } else {
            this.props.minusPts(this.props.match.params.pointsId);
            this.setState({ redirect: true })
        }
    }

    onRedirect = () => {
        return <Redirect to='/game'/>
    }

    render() {
        return (
            <div className="container">
                <h1>Trivia Page</h1>
                {this.state.question.question === undefined 
                ? <img src={loadingGif} alt=""/>
                :( <h1>{this.decodeHtml(this.state.question.question)}</h1> )
                }
                {this.state.answers && this.state.answers.map((a, index) => (
                    <div key={a + index}>
                        <button 
                            className="btn-outline-secondary"
                            value={a}
                            onClick={(e) => this.setAnswer(e)}>
                            {this.decodeHtml(a)}</button>
                    </div>
                ))}
                {this.state.redirect ? this.onRedirect() : ''}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    gameState: state
})

const mapPropsToDispatch = dispatch => ({
    addPts: points => { dispatch(addPts(points)) },
    minusPts: points => { dispatch(minusPts(points)) }
});

export default connect(mapStateToProps, mapPropsToDispatch)(Trivia);