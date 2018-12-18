import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Card extends Component {
    state = { 
        value: this.props.value,
        bool: this.props.bool,
        question: '',
        points: this.props.points,
        category: this.props.category
    }

onRedirect = () => {
   return <Redirect to={`/trivia/${this.state.value}/${this.state.category}`}/>
}

selectedCard = () => {
    this.setState({
        bool: true
    });
}

    render() { 
        return ( 
            <div 
                onClick={this.selectedCard}
                >
                <div className="card">
                    {this.state.points}
                    {this.state.bool}
                </div>
                {this.state.bool && this.onRedirect()}
            </div>
         );
    }
}
 
export default Card;