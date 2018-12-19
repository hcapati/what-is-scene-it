import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Card extends Component {
    state = { 
        value: this.props.value,
        bool: this.props.bool,
        boolCounter: 0,
        points: this.props.points,
        category: this.props.category
    }

onRedirect = () => {
    if (this.state.category === 'Marvel'){
        return <Redirect to={`/marvel/${this.state.points}`}/>
    }
    else if (this.state.category === 9 || this.state.category === 17) {
        return <Redirect to={`/trivia/${this.state.value}/${this.state.category}/${this.state.points}`}/>
    }    
    else {}
}

selectedCard = () => {
    this.setState({
        bool: true,
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