import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPts, minusPts } from './../../../actions/actions';
import axios from 'axios';

class SceneIt extends Component {
    state = {
        backdrops: [],
        imageUrl: '',
        userAnswer: '',
        answer: '',
        redirect: false
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImage = () => {
        console.log(this.state.backdrops[0].title)
        let selectedImage = this.state.backdrops[0].backdrop_path;
        this.setState({
            imageUrl: selectedImage,
            answer: this.state.backdrops[0].title
        })
    }

    fetchImages = () => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=bc1e92ab5760aac10dc7e3ed2437c91d&language=en-US&page=1")
            .then(response => {
                this.setState({
                    backdrops: response.data.results.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])
                }, () => this.fetchImage())
            })
    }

    submitAnswer = () => {
        if (this.state.userAnswer.toLowerCase() === this.state.answer.toLowerCase()) {
            console.log('correct');
            this.props.addPts(this.props.gameState.category)
            this.setState({
                redirect: true
            })
        } else if (this.state.userAnswer.toLowerCase() !== this.state.answer.toLowerCase()) {
            console.log('wrong');
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
            <div className="sceneIt-container">
                <div className="backdrop-container">
                    <h1>Scene It</h1>
                    <img src={`http://image.tmdb.org/t/p/w780${this.state.imageUrl}`} alt="" />
                </div>
                <div className= "input-container input-group mb-3">
                   <input
                       type="text"
                       className="form-control"
                       value={this.state.userAnswer}
                       onChange={(e) => this.setState({ userAnswer: e.target.value })} />
                   <div className="input-group-append">
                       <button
                           className="btn btn-outline-primary"
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
})

const mapDispatchToProps = dispatch => ({
    addPts: points => {( dispatch(addPts(points)) )},
    minusPts: points => {( dispatch(minusPts(points)) )}
});

export default connect(mapStateToProps, mapDispatchToProps)(SceneIt);

