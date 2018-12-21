import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setDifficulty, setCategory } from '../../actions/actions';

class Card extends Component {
    state = { 
        difficulty: this.props.difficulty,
        bool: this.props.bool,
        points: this.props.points,
        category: this.props.category,
    }

    onRedirect = () => {
        if (this.state.category === 'Marvel') {
            return <Redirect to={`/marvel/${this.props.getCategory(this.props.points)}`}/> 
        }
        else if (this.state.category === 9 || this.state.category === 17) {
            return <Redirect to={`/trivia/${this.props.getDifficulty(this.props.difficulty)}/${this.props.getCategory(this.props.category)}/${this.props.points}`}/>
        }    
        else if (this.state.category === 'Scene') {
            return <Redirect to={`/sceneit/${this.props.getCategory(this.props.points)}`} />
        }
    }

    selectCard = () => {
        this.setState({
            bool: true,
        });
    }

    render() { 
        return ( 
            <div>
                <div>
                    <button 
                    type="button" 
                    className="btn btn-primary cardButton"
                    onClick={this.selectCard}
                    setQuestion={this.props.setQuestion}>
                    {this.state.points}</button>
                </div>
                {this.state.bool && this.onRedirect()}
            </div>
         );
    }
}

const mapStateToProps = state => ({
    gameState: state
})

const mapDispatchToProps = dispatch => ({
    getCategory: value => { dispatch(setCategory(value)) },
    getDifficulty: value => { dispatch(setDifficulty(value)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);