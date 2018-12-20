import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';

import { disableCard } from './../../actions/actions';

class Matrix extends Component {

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
                        <div className={this.props.gameState.card1} onClick={this.props.disableCard}>
                        <Card difficulty={'easy'} bool={false} points={100} category={9} clicked={this.props.gameState.isClicked}/>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={this.props.gameState.card2} onClick={this.props.disableCard}>
                        <Card difficulty={'easy'} bool={false} points={100} category= {17} clicked={this.props.gameState.isClicked}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'easy'} bool={false} points={100} category={'Marvel'} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <div className='jhjhk'>
                            <Card difficulty={'easy'} bool={false} points={100} category={'Scene'} clicked={false} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={200} category={9} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={200} category={17} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={200} category={'Marvel'} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={200} category={'Scene'} clicked={false} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={300} category={9} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={300} category={17} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={300} category={'Marvel'} clicked={false} />
                    </div>
                    <div className="col-md-3">
                        <Card difficulty={'medium'} bool={false} points={300} category={'Scene'} clicked={false} />
                    </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Card difficulty={'hard'} bool={false} points={400} category={9} clicked={false} />
                </div>
                <div className="col-md-3">
                    <Card difficulty={'hard'} bool={false} points={400} category={17} clicked={false} />
                </div>
                <div className="col-md-3">
                    <Card difficulty={'hard'} bool={false} points={400} category={'Marvel'} clicked={false} />
                </div>
                <div className="col-md-3">
                    <Card difficulty={'hard'} bool={false} points={400} category={'Scene'} clicked={false} />
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