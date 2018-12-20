import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createUser } from './../../actions/actions';


// form to sign up - input username, first name, last name, email, password, confirm password 
// check to make sure password matches confirm password

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
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                            palceholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={e => this.setState({ firstName: e.target.value })}
                            palceholder="Enter First Name:"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={e => this.setState({ lastName: e.target.value })}
                            palceholder="Enter Last Name:"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            className="form-control"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            palceholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            palceholder="Enter Password:"/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input 
                            type="password"
                            className="form-control"
                            value={this.state.confirmPw}
                            onChange={e => this.setState({ confirmPw: e.target.value })}
                            palceholder="Confirm Password:"/>
                    </div>
                    <button 
                        className="btn btn-success"
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