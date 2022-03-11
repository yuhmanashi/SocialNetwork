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
        this.props.signUp(this.state).then(this.props.closeModal).then(this.props.removeErrors);
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    render() {
        const { first_name, last_name, email, password } = this.state;
        const { errors } = this.props;
        
        let fcolor = '';
        let lcolor = '';
        let ecolor = '';
        let pcolor = ''
        
        const errorHandler = {}

        if (errors.includes("First name can't be blank")) {
            errorHandler['firstname'] = "First name can't be blank";
            fcolor = 'red'
        }
        if (errors.includes("Last name can't be blank")) {
            errorHandler['lastname'] = "Last name can't be blank";
            lcolor = 'red'
        }
        if (errors.includes("Email can't be blank")) {
            errorHandler['email'] = "Email can't be blank";
            ecolor = 'red'
        }
        if (errors.includes("Password is too short (minimum is 6 characters)")) {
            errorHandler['password'] = "Password is too short (minimum is 6 characters)";
            pcolor = 'red'
        }

        return (
            <div className="signup-form">
                <div className="signup-header">
                    <h2>Sign Up</h2>
                    <p>It's quick and easy.</p>
                    <hr className="hr-top" />
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
                <div className="signup-errors">
                        <ul>
                            {
                                Object.values(errorHandler).map((error, i) => (
                                    <li key={`${i}`}>{error}</li>
                                ))
                            }
                        </ul>
=======
>>>>>>> branch2
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
>>>>>>> main
                </div>

                <form>
                    <input
                        id="first-name" 
                        type="text" 
                        value={ first_name }
                        onChange={this.update('first_name')}
                        placeholder="First Name"
                        style={ ({borderColor: fcolor}) }
                    />
                        
                    <input 
                        id="last-name"
                        type="text" 
                        value={ last_name }
                        onChange={this.update('last_name')}
                        placeholder="Last Name"
                        style={ ({borderColor: lcolor}) }
                    />
                        
                    <input 
                        id="email"
                        type="text" 
                        value={ email }
                        onChange={this.update('email')}
                        placeholder="Email"
                        style={ ({borderColor: ecolor}) }
                    />
                        
                    <input 
                        id="password"
                        type="password" 
                        value={ password }
                        onChange={this.update('password')}
                        placeholder="Password"
                        style={ ({borderColor: pcolor}) }
                    />
                        
                    <div className='signup-button' onClick={this.handleSubmit}>Sign Up</div>
                    <hr className="hr-bottom" />
                </form>
                    
            </div>
           
        )
    }
}

export default SignUpForm;