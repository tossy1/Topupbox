import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar} from 'reactstrap'

export class Footer extends Component {
    render() {
        return (
            <div>

                {/* Main Footer */}

                <footer className="main-footer">
                    <strong>
                        Copyright © 2021
                                <a href="http://">Topup Box</a>.
                            </strong>
                    All rights reserved.
                            <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b>
                    </div>
                </footer>
            </div>  
            
        )
    }
}

export default Footer
