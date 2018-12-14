import React, { Component } from 'react';

// form to sign up - input username, first name, last name, email, password, confirm password 
// check to make sure password matches confirm password

class SignupForm extends Component {
    state = { 
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPw: ''
     }

    render() { 
        return ( 
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="email" 
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
                            value={this.state.firstName}
                            onChange={e => this.setState({ confirmPw: e.target.value })}
                            palceholder="Confirm Password:"/>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignupForm;