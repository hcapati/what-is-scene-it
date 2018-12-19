import React, { Component } from 'react';

import Card from './card';

class Matrix extends Component {

    render() {
        return (
            <div className="container">
                {/* displays 4 x 4 cards, card display */}
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
                        <h6>Name that soundtrack</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card value={'easy'} bool={false} points={100} category={9} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'easy'} bool={false} points={100} category={17} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'easy'} bool={false} points={100} category={'WD'} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'easy'} bool={false} points={100} category={'S'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={200} category={9} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={200} category={17} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={200} category={'Marvel'} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={200} category={'S'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={300} category={9} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={300} category={17} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={300} category={'Marvel'} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'medium'} bool={false} points={300} category={'S'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Card value={'hard'} bool={false} points={400} category={9} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'hard'} bool={false} points={400} category={17} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'hard'} bool={false} points={400} category={'WD'} />
                    </div>
                    <div className="col-md-3">
                        <Card value={'hard'} bool={false} points={400} category={'S'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Matrix;