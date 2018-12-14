import React, { Component } from 'react';

// form to login inputs: username, password

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }
    render() {
        return (
            <div className="container">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={e = this.setState({ email: e.target.value })}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={e = this.setState({ password: e.target.value })}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;