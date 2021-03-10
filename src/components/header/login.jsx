import React from 'react'
import {Link} from "react-router-dom"

export default function login() {
    return (
        <div>
            <div className="login-box">
                <div className="login-logo">
                    <img src="dist/img/origin.png" width="250px" />
                </div>
                {/* /.login-logo */}
                <div className="card" style={{ width: 450 }}>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <i className="far fa-eye" id="togglePassword" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
            </label>
                                </div>
                            </div>
                            <div>
                                <input type="submit" className="form-control btn-primary" />
                            </div>
                            <div style={{ marginTop: 10 }}>
                                <p style={{ textAlign: 'center' }}>Don't have an account?
            <a href="signup" className="text-center">Signup &nbsp;&nbsp;&nbsp;</a>
                                    <a href="reset.html"> Forgot your password?</a>
                                </p>
                            </div>
                        </form></div></div></div>
   
        </div>
    )
}
