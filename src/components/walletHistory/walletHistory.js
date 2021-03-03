import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import img1 from "../img/user2-160x160.jpg";
import img2 from "../img/Topupbox.png";
import Homepage from "../homePage/HomePage"
import SideBar from "../pages/sideBarMenu/SideBar"




export class walletHistory extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    {/* Navbar */}
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"/></a>
                            </li>
                            {/*li class="nav-item d-none d-sm-inline-block">
  <a href="index3.html" class="nav-link">Home</a>
</li>
<li class="nav-item d-none d-sm-inline-block">
  <a href="#" class="nav-link">Contact</a>
</li*/} </ul>
                        {/* SEARCH FORM */}
                        <form className="form-inline ml-3">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Right navbar links */}
                        <ul className="navbar-nav ml-auto">
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <i className="far fa-bell"/>
                                    <span className="badge badge-warning navbar-badge">15</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                                    <div className="dropdown-divider"/>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-envelope mr-2"/>
                                        4 new messages
                                        <span className="float-right text-muted text-sm">3 mins</span>
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-users mr-2"/>
                                        8 friend requests
                                        <span className="float-right text-muted text-sm">12 hours</span>
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-file mr-2"/>
                                        3 new reports
                                        <span className="float-right text-muted text-sm">2 days</span>
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown"
                                style={
                                    {marginTop: '-10px'}
                            }>
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <img src={img1}
                                        width="40px;"
                                        className="img-circle elevation-2"
                                        alt="User Image"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="profile.html" className="dropdown-item">
                                        <i className="fas fa-user mr-2"/>Profile
                                    </a>
                                    <div className="dropdown-divider"/>
                                    <Link to="/operations" className="dropdown-item">
                                        <i className="fas fa-cog mr-2"/>Settings
                                    </Link>
                                    <div className="dropdown-divider"/>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-times mr-2"/>Logout
                                    </a>
                                </div>
                            </li>
                            {/*li class="nav-item">
  <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
      class="fas fa-th-large"></i></a>
</li*/} </ul>
                    </nav>
                    {/* /.navbar */}
                    {/* Main Sidebar Container */}
< aside className = "main-sidebar sidebar-dark-primary elevation-4" style = {{ position: 'fixed' }} >

                        {/* Brand Logo */}
                        <a href="index3.html" className="brand-link"
                            style={
                                { backgroundColor: '#343a40' }
                            }>
                            <center>
                                <img src="dist/img/Topupbox.png" alt="Topup-box Logo" width="180px;" height="50px;" className=" img-square" /></center>
                        </a>
                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="mt-3 pb-3"
                                style={
                                    {
                                        paddingTop: 15,
                                        marginBottom: '-20px'
                                    }
                                }>
                                <div className="info">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"
                                        style={
                                            { marginLeft: '-15px' }
                                        }>
                                        <li className="nav-item has-treeview">
                                            <a href="#" className="nav-link">
                                                <p>Business name 1</p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="exporttran.html" className="nav-link">
                                                        <p>Business name 2</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/wallethistory" className="nav-link">
                                                        <p>Business name 3</p>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/Addbiz" className="nav-link">
                                                        <p>Add Business</p>
                                                    </Link>
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
                                        <Link to="/" className="nav-link">
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
                                        <Link to="/wallethistory" className="nav-link active">
                                            <i className="nav-icon fas fa-history" />
                                            <p>Wallet History</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/fundwallet" className="nav-link ">
                                            <i className="nav-icon fas fa-credit-card" />
                                            <p>Fund Wallet</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className="nav-link">
                                            <i className="nav-icon fas fa-cog" />
                                            <p>Settings</p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* /.sidebar-menu */} </div>
                        {/* /.sidebar */} </aside>

                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">Wallet History
                                        </h1>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active">Wallet History</li>
                                        </ol>
                                    </div>
                                    {/* /.col */} </div>
                                {/* /.row */} </div>
                            {/* /.container-fluid */} </div>
                        {/* /.content-header */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        {/* Default box */}
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="row card-body">
                                                    <div className="col-md-6">
                                                        <div className="card">
                                                            <h3 style={
                                                                {
                                                                    paddingTop: 20,
                                                                    paddingLeft: 20
                                                                }
                                                            }>Monthly Balance</h3>
                                                            <div className="card-body">
                                                                <div className="panel-body">
                                                                    <div style={
                                                                        {width: '100%'}
                                                                    }>
                                                                        <div className="table-responsive">
                                                                            <table className="table table-striped table-bordered table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Total Monthly Credit</th>
                                                                                        <th>Total Monthly Debit</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className="odd gradeX">
                                                                                        <td>N 2,000,000.00</td>
                                                                                        <td>N1,800,000.00</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card">
                                                            <h3 style={
                                                                {
                                                                    paddingTop: 20,
                                                                    paddingLeft: 20
                                                                }
                                                            }>Weekly Balance</h3>
                                                            <div className="card-body">
                                                                <div className="panel-body">
                                                                    <div style={
                                                                        {width: '100%'}
                                                                    }>
                                                                        <div className="table-responsive">
                                                                            <table className="table table-striped table-bordered table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Total Weekly Credit</th>
                                                                                        <th>Total Weekly Debit</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className="odd gradeX">
                                                                                        <td>N 2,000,000.00</td>
                                                                                        <td>N1,800,000.00</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.card-body */}
                                                <div className="card-footer">
                                                    <form>
                                                        <div style={
                                                            {
                                                                marginTop: 10,
                                                                fontFamily: 'roboto'
                                                            }
                                                        }>
                                                            <p><i className="fas fa-recycle"/><a href="# ">
                                                                    Reload
                                                                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <label style={
                                                                    {fontWeight: 'normal'}
                                                                }>Filter:
                                                                </label>
                                                                <select>
                                                                    <option>All</option>
                                                                    <option>Successful</option>
                                                                    <option>Failed</option>
                                                                    <option>Reversed</option>
                                                                    <option>Deposit</option>
                                                                    <option>Withdrawal</option>
                                                                </select>
                                                            </p>
                                                        </div>
                                                    </form>
                                                    <div className="card">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                                                <thead>
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>Balance</th>
                                                                        <th>Previous balance</th>
                                                                        <th>Remark</th>
                                                                        <th>Debit amount</th>
                                                                        <th>Credit amount</th>
                                                                        <th>Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="odd gradeX">
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 4.0</td>
                                                                        <td>Win 95+</td>
                                                                        <td className="center">4</td>
                                                                        <td className="center">X</td>
                                                                        <td className="center">j</td>
                                                                        <td>kfm</td>
                                                                    </tr>
                                                                    <tr className="odd gradeX">
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 4.0</td>
                                                                        <td>Win 95+</td>
                                                                        <td className="center">4</td>
                                                                        <td className="center">X</td>
                                                                        <td className="center">j</td>
                                                                        <td>kfm</td>
                                                                    </tr>
                                                                    <tr className="odd gradeX">
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 4.0</td>
                                                                        <td>Win 95+</td>
                                                                        <td className="center">4</td>
                                                                        <td className="center">X</td>
                                                                        <td className="center">j</td>
                                                                        <td>kfm</td>
                                                                    </tr>
                                                                    <tr className="odd gradeX">
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 4.0</td>
                                                                        <td>Win 95+</td>
                                                                        <td className="center">4</td>
                                                                        <td className="center">X</td>
                                                                        <td className="center">j</td>
                                                                        <td>kfm</td>
                                                                    </tr>
                                                                    <tr className="odd gradeX">
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 4.0</td>
                                                                        <td>Win 95+</td>
                                                                        <td className="center">4</td>
                                                                        <td className="center">X</td>
                                                                        <td className="center">j</td>
                                                                        <td>kfm</td>
                                                                    </tr>
                                                                    <tr className="odd gradeX">
                                                                        <td>Trident</td>
                                                                        <td>Internet Explorer 4.0</td>
                                                                        <td>Win 95+</td>
                                                                        <td className="center">4</td>
                                                                        <td className="center">X</td>
                                                                        <td className="center">j</td>
                                                                        <td>kfm</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.card-footer*/} </div>
                                            {/* /.card */} </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        )
    }
}

export default walletHistory
