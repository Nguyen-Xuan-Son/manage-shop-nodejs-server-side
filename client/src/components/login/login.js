import React from 'react';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="bg-login">
                <div className="container">
                    <div className="panel-left">
                        <div className="icons">
                            <div className="icon-twitter"><i className="fa fa-twitter-square"></i></div>
                            <div className="icon-google"><i className="fa fa-google-plus-square"></i></div>
                            <div className="icon-facebook"><i className="fa fa-facebook-square"></i></div>
                        </div>
                        <div className="text-qt">Don't have an account?</div>
                        <div className="text-signup">Signup</div>
                    </div>
                    <div className="panel-right">
                        <div className="logo">Image logo</div>
                        <div className="name-system">Manager Shop</div>
                        <div>
                            <form>
                                <div className="control-input">
                                    <input  className="effects-input"
                                            placeholder="Username"
                                            type="text" />
                                    <span class="focus-border"><i></i></span>
                                </div>
                                <div className="control-input">
                                    <input  className="effects-input"
                                            placeholder="Password"
                                            type="text" />
                                    <span class="focus-border"><i></i></span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div>
                                    <button type="button">Login</button>
                                </div>
                            </form>
                        </div>
                        <div>Forgot Password?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
