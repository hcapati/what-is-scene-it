import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createUser } from './../../actions/actions'; 

class SignupForm extends Component {
    state = { 
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPw: '',
        scoreHistory: [0],
        islogged: false
     }

    checkPw = (e) => {
        console.log("sign up button working")
        e.preventDefault();
        if (this.state.password === this.state.confirmPw) {
            this.createNewUser();
        } else {
            alert("Passwords do not match. Please try again.") 
        }
    }

    createNewUser = () => {
        this.setState({ islogged: true}, () => this.props.create(this.state))
    }

    onSignIn = () => {
        return <Redirect to='/results'/>
    }

    render() { 
        return ( 
            <div>
                <form className="formColor signup-form">
                    <div className="form-group row">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            className="form-control formInput"
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                            palceholder="Enter username"/>
                    </div>
                    <div className="form-group row">
                        <label>First Name:</label>
                        <input 
                            type="text"
                            className="form-control formInput"
                            value={this.state.firstName}
                            onChange={e => this.setState({ firstName: e.target.value })}
                            palceholder="Enter First Name:"/>
                    </div>
                    <div className="form-group row">
                        <label>Last Name:</label>
                        <input 
                            type="text"
                            className="form-control formInput"
                            value={this.state.lastName}
                            onChange={e => this.setState({ lastName: e.target.value })}
                            palceholder="Enter Last Name:"/>
                    </div>
                    <div className="form-group row">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            className="form-control formInput"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            palceholder="Enter username"/>
                    </div>
                    <div className="form-group row">
                        <label>Password:</label>
                        <input 
                            type="password"
                            className="form-control formInput"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            palceholder="Enter Password:"/>
                    </div>
                    <div className="form-group row">
                        <label>Confirm Password:</label>
                        <input 
                            type="password"
                            className="form-control formInput"
                            value={this.state.confirmPw}
                            onChange={e => this.setState({ confirmPw: e.target.value })}
                            palceholder="Confirm Password:"/>
                    </div>
                    <button 
                        className="btn btn-success signupFormBtn"
                        onClick={(e) => this.checkPw(e)}>Sign Up</button>
                    {this.state.islogged && this.onSignIn()}
                </form>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    users: state
});

const mapDispatchToProps = dispatch => ({
    create: user => { dispatch(createUser(user)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);