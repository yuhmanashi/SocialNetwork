import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    render() {
        const { first_name, last_name, email, password } = this.state;

        return (
            <div className="signup-page">
                <div className="signup-form">
                    <div className="signup-message">
                        <h1>Sign Up</h1>
                    </div>

                    <form>
                        <label>
                            First Name
                            <input 
                                type="text" 
                                value={ first_name }
                                onChange={this.update('first_name')}
                            />
                        </label>
                        <label>
                            Last Name
                            <input 
                                type="text" 
                                value={ last_name }
                                onChange={this.update('last_name')}
                            />
                        </label>
                        <label>
                            Email
                            <input 
                                type="text" 
                                value={ email }
                                onChange={this.update('email')}
                            />
                        </label>
                        <label>
                            Password
                            <input 
                                type="password" 
                                value={ password }
                                onChange={this.update('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm;