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
                        <div className="logo">
                            <img src="https://profile.freepik.com/accounts/avatar/default_07.png" alt="Image logo" />
                        </div>
                        <div className="name-system">Manager Shop</div>
                        <div>
                            <form>
                                <div className="control-input">
                                    <input  placeholder="Username"
                                            className="input-style"
                                            type="text" />
                                </div>
                                <div className="control-input">
                                    <input  placeholder="Password"
                                            className="input-style"
                                            type="text" />
                                </div>
                                <div>
                                    <input  id="remember-me"
                                            name="remember-me"
                                            type="checkbox" />
                                    <label forhtml="remember-me">Remember me</label>
                                </div>
                                <div className="container-btn-login">
                                    <button className="btn-login" type="button">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="forgot-pass-style">Forgot Password?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
