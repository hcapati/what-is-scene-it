import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';

import { disableCard } from './../../actions/actions';

class Matrix extends Component {

    componentDidMount() {
        for(let c of this.props.gameState.cards) {
          if(c.val === true) {
            this.refs[c.name].className = 'hide'
          }
        }
      }


    hideMe = (card) => {
        let sample = this.props.gameState.cards.findIndex(x => card === x.name)
        this.props.disableCard(sample)
      }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <h6>General Knowledge</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Science & Nature</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Who Dat?</h6>
                    </div>
                    <div className="col-md-3">
                        <h6>Scene It</h6>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-3'>
                        <div ref='card1' onClick={() => this.hideMe('card1')}>
                        <Card difficulty={'easy'} bool={false} points={100} category={9} clicked={this.props.gameState.isClicked}/>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="blue" ref='card2' onClick={() => this.hideMe('card2')}>
                        <Card difficulty={'easy'} bool={false} points={100} category= {17} clicked={this.props.gameState.isClicked}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card3' onClick={() => this.hideMe('card3')}>
                        <Card difficulty={'easy'} bool={false} points={100} category={'Marvel'} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card4' onClick={() => this.hideMe('card4')}>
                            <Card difficulty={'easy'} bool={false} points={100} category={'Scene'} clicked={false} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div ref='card5' onClick={() => this.hideMe('card5')}>
                        <Card difficulty={'medium'} bool={false} points={200} category={9} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card6' onClick={() => this.hideMe('card6')}>
                        <Card difficulty={'medium'} bool={false} points={200} category={17} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card7' onClick={() => this.hideMe('card7')}>
                        <Card difficulty={'medium'} bool={false} points={200} category={'Marvel'} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card8' onClick={() => this.hideMe('card8')}>
                        <Card difficulty={'medium'} bool={false} points={200} category={'Scene'} clicked={false} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div ref='card9' onClick={() => this.hideMe('card9')}>
                        <Card difficulty={'medium'} bool={false} points={300} category={9} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card10' onClick={() => this.hideMe('card10')}>
                        <Card difficulty={'medium'} bool={false} points={300} category={17} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card11' onClick={() => this.hideMe('card11')}>
                        <Card difficulty={'medium'} bool={false} points={300} category={'Marvel'} clicked={false} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div ref='card12' onClick={() => this.hideMe('card12')}>
                        <Card difficulty={'medium'} bool={false} points={300} category={'Scene'} clicked={false} />
                        </div>
                    </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div ref='card13' onClick={() => this.hideMe('card13')}>
                    <Card difficulty={'hard'} bool={false} points={400} category={9} clicked={false} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div ref='card14' onClick={() => this.hideMe('card14')}>
                    <Card difficulty={'hard'} bool={false} points={400} category={17} clicked={false} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div ref='card15' onClick={() => this.hideMe('card15')}>
                    <Card difficulty={'hard'} bool={false} points={400} category={'Marvel'} clicked={false} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div ref='card16' onClick={() => this.hideMe('card16')}>
                    <Card difficulty={'hard'} bool={false} points={400} category={'Scene'} clicked={false} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    gameState: state
})

const mapDispatchToProps = dispatch => ({
    disableCard: card => { dispatch(disableCard(card)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);