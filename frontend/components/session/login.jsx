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
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    render() {
        const { errors } = this.props;
        const { email, password } = this.state;

        return (
            <div className="splash-page">
                
                <div className="welcome">
                    <div className="logo">
                        <h1>SocialNetwork</h1>
                    </div>
                    
                    <div className="message">
                        <p>Connect with friends and the world around you on SocialNetwork.</p>
                    </div>
                </div>
                
                <div className="login-form">
                    <form>
                        <input
                            id="email" 
                            type="text" 
                            value={ email }
                            onChange={this.update('email')}
                            placeholder="Email"
                            style={ errors.includes('Wrong credentials') ? ({ borderColor: 'red'}) : ({ borderColor: "" })} 
                        />
                        
                        <br/>
                        
                        <input
                            id="password" 
                            type="text" 
                            value={ password }
                            onChange={this.update('password')}
                            placeholder="Password"
                            style={ errors.includes('Wrong credentials') ? ({ borderColor: 'red'}) : ({ borderColor: "" })}
                        />
                        
                        <br/>
                        
                        <p id="error" style={ errors.includes('Wrong credentials') ? ({ display: ''}) : ({ display: "none" })}>
                            Wrong Credentials
                        </p>

                        <button onSubmit={this.handleSubmit}>Log In</button>
                        
                        <br/>
                        
                        <a href="">Demo</a>
                        
                        <br/>

                        <button>Sign Up</button>
                    </form>
                </div>
            
            </div>
        )
    }
}

export default LogInForm;