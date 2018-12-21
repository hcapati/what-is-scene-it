import React, { Component } from 'react';
import LoginForm from './loginForm';
import SignupForm from './signupForm'; 

class HomeScreen extends Component {
    state = {
        loginForm: true
    }

    onCreate = () => {
        this.setState({
            loginForm: false
        });
    }
    
    backToLogin = () => {
        this.setState({ loginForm: true })
    }

    render () {
        return ( 
            <div>
                <div className="homePage-container">
                    <div>
                        <h5 id='signupHeader'>Not a member?</h5>
                        <button 
                            className='btn btn-outline-secondary'
                            id='signupBtn'
                            onClick={this.onCreate}>Sign Up</button>
                    </div>
                    {this.state.loginForm ?
                    <div className="container">
                        <h1 className="display-3 title">What is Scene It?</h1>
                        <div className="form-background">
                            <div className='login-container'>
                                <div className='welcome-header'>
                                    <h1>Welcome</h1>
                                </div>
                                <div>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    :  
                    (
                    <div>
                        <button 
                            className="btn btn-outline-secondary backLoginBtn"
                            onClick={this.backToLogin}>Back to Login</button>
                    <div className="container">
                        <div className="form-background">
                            <div className='signup-container'>
                                <div>
                                    <SignupForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )}                
                </div>
            </div>
        );
    }
}
 
export default HomeScreen;
