import React from 'react'
import {Link} from "react-router-dom"

export default function signup() {
    return (
        <div>
            <>
                <div className="login-box">
                    <div className="login-logo">
                        <img src="dist/img/origin.png" width="250px" />
                    </div>
                    {/* /.login-logo */}
                    <div className="card" style={{ width: 450 }}>
                        <div className="card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <form action method="post" id="frm1">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full name" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Retype password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="#">Terms</a>
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div>
                                    <input type="submit" defaultValue="Signup" className="form-control btn-primary" />
                                </div>
                                <div>
                                    <p style={{ textAlign: 'center', marginTop: 10 }}>
                                        Already have an account?
            <a href="login.html"> Login</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
                {/* /.login-box */}
                {/* jQuery */}
                {/* Bootstrap 4 */}
                {/* AdminLTE App */}
            </> 
        </div>
    )
}
