import React, { PureComponent } from 'react';

class Login extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <form className="login">
                <p>
                    <label>Username: </label>
                    <input id="email" onChange={this.handleInputChange} name="email" type="text" />
                </p>
                <p>
                    <label>Password: </label>
                    <input id="password" onChange={this.handleInputChange} name="password" type="password" />
                </p>
                <p>
                    <button>Submit</button>
                </p>
            </form>
        );
    }
}

export default Login;
