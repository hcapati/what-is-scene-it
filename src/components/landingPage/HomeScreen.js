import React, { Component } from 'react';
import LoginForm from './loginForm';
import SignupForm from './signupForm';



// welcome screen that allows user to login or sign up. chosen form rendered on screen 

const HomeScreen = () => {
    return ( 
        <div className="container">
            <h1>What Is Scene It?</h1>
            <div>
                <div>
                    <LoginForm />
                    <SignupForm />
                </div>
            </div>
        </div>
     );
}
 
export default HomeScreen;
