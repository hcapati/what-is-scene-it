import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { onLogin } from './../../actions/actions';


class LoginForm extends Component {
    state = {
        user: {
            email: '',
            password: ''
        },
        redirect: false
    }

    verifyPw = (e) => {
        e.preventDefault();

        let findUser = this.props.users.users.find(user => user.email === this.state.user.email)

        if (findUser === undefined) {
            alert("Password or Email does not match"); 
        }  else if (findUser.password === this.state.user.password) {
            this.onLogin();
        } else {
            alert("Password or Email does not match")
        }
    };

    onLogin = () => {
        this.props.onLogin(this.state.user);
        this.setState({ redirect: true });
    };

    render() {
        return (
        this.state.redirect 
        ? <Redirect to='/results'/>
        : (
            <div>
                <form className='formColor login-form'>
                    <div className="form-group row">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            className="form-control formInput" 
                            value={this.state.user.email}
                            onChange={e => this.setState({ 
                                user: {
                                ...this.state.user,
                                email: e.target.value }})}/>
                    </div>
                    <div className="form-group row">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            className="form-control formInput" 
                            value={this.state.user.password}
                            onChange={e => this.setState({ 
                                user: {
                                    ...this.state.user,
                                    password: e.target.value }})}/>
                    </div>
                    <button 
                        className="btn btn-success login-btn"
                        onClick={(e) => this.verifyPw(e)}>Login</button>
                </form>
            </div>
        )
        );
    }
}

const mapStateToProps = state => ({
    users: state
})

const mapPropsToDispatch = dispatch => ({
    onLogin: email => dispatch(onLogin(email))
});

export default connect(mapStateToProps, mapPropsToDispatch)(LoginForm);