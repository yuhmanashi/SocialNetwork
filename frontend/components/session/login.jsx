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
            color = 'red';
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
                <hr/>
                <div className="footer">
                    <div className='links'>
                        <a href="https://yaozxu.com">Portfolio</a>
                        <a href="https://linkedin.com/in/yaoxu03">LinkedIn</a>
                        <a href="https://github.com/yuhmanashi">Github</a>
                        <a href="https://angel.co/u/yao-xu-3">AngelList</a>
                    </div>
                    <hr className="hr-footer"/>
                    <div className="footer-info">
                        <div className='description'>A clone of Facebook</div>
                        <div className='technology'>JavaScript React Redux Ruby-on-Rails HTML SCSS JQuery JBuilder</div>
                        <div className="credit">Created by Yao Xu</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogInForm;