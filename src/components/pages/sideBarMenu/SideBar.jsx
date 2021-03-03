import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, NavBar } from 'reactstrap';



export class SideBar extends Component {

    state = {
        displayNav: true
    }

    onDisplayNav = () => {
        this.setState({ displayNav: !this.state.displayNav })
    }

    style = {
        display: 'none',
    }

    render() {
        const { displayNav } = this.state;
        return (
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ position: 'fixed' }}>
                    {/* Brand Logo */}
                    <div>
                        <Link to="/Dashnoard" className="brand-link"
                            style={
                                { backgroundColor: "#343a40" }
                            }>
                            <center>
                                <img src="dist/img/Topupbox.png" alt="Topup-box Logo" width="180px;" height="50px;" className=" img-square" />
                            </center>
                        </Link>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div class="user-panel mt-3 pb-3" style={{ marginBottom: "-30px", paddingTop: "10px" }}>
                            <div class="info">
                                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={{ marginLeft: '-15px' }}>
                                    <li class="nav-item has-treeview">
                                        <a href="#" class="nav-link" onClick={this.onDisplayNav}>
                                            <p>Business name 1</p>
                                        </a>
                                        <ul style={{ display: displayNav ? this.style.display : '' }} className="nav">
                                            <li class="nav-item">
                                                <a href="exporttran.html" class="nav-link">

                                                    <p>Business name 2</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="wallethistory.html" class="nav-link">

                                                    <p>Business name 3</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="addbiz.html" class="nav-link">
                                                    <p>Add Business</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item">
                                    {/*<a href="./index2.html" */}

                                    <Link to="/" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>Dashboard</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/transactions" className="nav-link">
                                        <i className="nav-icon fas fa-money-bill-alt" />
                                        <p>Transactions</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/walletHistory" className="nav-link">
                                        <i className="nav-icon fas fa-history" />
                                        <p>Wallet History</p>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/fundwallet" className="nav-link">
                                        <i className="nav-icon fas fa-credit-card" />
                                        <p>Fund Wallet</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/settings" className="nav-link">
                                        <i className="nav-icon fas fa-cog" />
                                        <p>Settings</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                        {" "} </div>
                    {/* /.sidebar */}
                    {" "} </aside>
            </div>
        )
    }
}

export default SideBar
