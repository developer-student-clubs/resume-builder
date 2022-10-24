import React, { Component } from 'react';

import SignupForm from './signupForm';

class Signup extends Component {
    render() {
        return (
            <div className='sign-up'>
                <SignupForm/>
            </div>
        )
    }
}

export default Signup;