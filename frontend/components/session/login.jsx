import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoAccount = this.demoAccount.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logIn(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    demoAccount(){
        const info = {
            email: 'demo@socialnetwork.com',
            password: 'password'
        }

        this.props.logIn(info)
    }

    openModal() {
        this.props.openModal('signup');
    }

    render() {
        const { email, password } = this.state;
        const { errors } = this.props;

        let color = '';
        let error = '';

        if (errors.includes('Wrong email and/or password')) {
            error = 'Invalid email and/or password. Please try again.';
            color = 'red'
        }

        return (
            <div className="splash-page">
                <div className="main">
                    <div className="welcome">
                        <h1>SocialNetwork</h1>
                        <p>Connect with friends and the world</p>
                        <p>around you on SocialNetwork.</p>
                    </div>
                
                    <div className="login-form">
                        <form>
                            <div className="login-error">
                                <p>{ error }</p>
                            </div>

                            <input
                                id="email" 
                                type="text" 
                                value={ email }
                                onChange={this.update('email')}
                                placeholder="Email"
                                style={({borderColor: color})}
                            />
                        
                            <input
                                id="password" 
                                type="password" 
                                value={ password }
                                onChange={this.update('password')}
                                placeholder="Password"
                                style={({borderColor: color})}
                            />

                            <div className="login-button" onClick={this.handleSubmit}>Log In</div>
                        
                            <div className="demo" onClick={this.demoAccount}>Demo?</div>

                            <hr className="hr-top" />

                            <div className="signup-button" onClick={this.openModal}>Create new account</div>
                        </form>
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
}

export default LogInForm;