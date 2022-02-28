import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logIn(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
    
    render() {
        const { email, password } = this.props;

        return (
            <div className="login-page">
                <div className="login-form">
                    <div className="login-message">
                        <h1>Log In</h1>
                    </div>

                    <form>
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
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogInForm;