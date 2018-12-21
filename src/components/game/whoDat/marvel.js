import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPts, minusPts } from './../../../actions/actions';

import loadingGif from './../../../assets/loading.gif';
import { marvelkey } from './../../../constants/keys';

class Marvel extends Component {
    state = {
        marvelEasy: ['wolverine', 'captain%20america', 'wasp', 'iron%20man', 'daredevil', 'deadpool', 'human%20torch', 'thanos', 'black%20panther', 'venom', 'spider-man', 'hulk', 'cyclops', 'mystique', 'hela', 'black%20widow',],
        marvelMedium: ['galactus', 'silver%20surfer', 'doctor%20doom', 'cable', 'gambit', 'jean%20grey', 'punisher', 'rogue', 'elektra', 'carnage', 'quicksilver', 'ghost%20rider', 'howard%20the%20duck', 'psylocke'],
        marvelHard: ['moon%20knight', 'magneto', 'ultron', 'hank%20pym', 'hercules', 'ego', 'ka-zar', 'sauron', 'kitty%20pryde', 'dazzler', 'sebastian%20shaw', 'mandarin', 'leader', 'absorbing%20man', 'dormammu', 'emma%20frost'],
        image: '',
        userAnswer: '',
        answer: '',
        redirect: false
    }

    componentDidMount() {
        this.fetchMarvelChar();
    }

    shuffleArray = (points) => {
        if (points === 100) {
            return this.state.marvelEasy[Math.floor(Math.random() * this.state.marvelEasy.length)]
        } else if (points === 200 || points === 300) {
            return this.state.marvelMedium[Math.floor(Math.random() * this.state.marvelMedium.length)]
        } else if (points === 400) {
            return this.state.marvelHard[Math.floor(Math.random() * this.state.marvelHard.length)]
        }
    }

    fetchMarvelChar = () => {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.shuffleArray(parseInt(this.props.gameState.category))}&apikey=${marvelkey}`)
            .then(response => {
                console.log(response.data.data.results[0])
                this.setState({
                    image: response.data.data.results[0].thumbnail.path,
                    answer: response.data.data.results[0].name
                })
            })
    };

    submitAnswer = () => {
        if (this.state.userAnswer.toLowerCase() === this.state.answer.toLowerCase()) {
            this.props.addPts(this.props.gameState.category)
            this.setState({
                redirect: true
            })
        } else if (this.state.userAnswer.toLowerCase() !== this.state.answer.toLowerCase()) {
            this.props.minusPts(this.props.gameState.category)
            this.setState({
                redirect: true
            })
        }
    };

    onRedirect = () => {
        return <Redirect to='/game' />
    }

    render() {
        return (
            <div className='marvel-container'>
                {this.state.image === ''
                    ? <img src={loadingGif} alt="" />
                    : (
                        <div className='marvelImage-container'>
                            <div>
                                <h1>Who Dat?</h1>
                            </div>
                            <img src={`${this.state.image}.jpg`} alt="" />
                        </div>
                    )}
                <div className="input-container input-group mb-3 marvel-input">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.userAnswer}
                        onChange={(e) => this.setState({ userAnswer: e.target.value })} />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary"
                            onClick={this.submitAnswer}
                        >Final Answer?</button>
                    </div>
                </div>
                {this.state.redirect && this.onRedirect()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gameState: state
});

const mapDispatchToProps = dispatch => ({
    addPts: points => { (dispatch(addPts(points))) },
    minusPts: points => { (dispatch(minusPts(points))) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marvel);