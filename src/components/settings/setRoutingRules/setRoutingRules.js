import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class setRoutingRules extends Component {
    render() {
        return (
            <div>
                <>
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                            </li>
                            {/*li class="nav-item d-none d-sm-inline-block">
  <a href="index3.html" class="nav-link">Home</a>
</li>
<li class="nav-item d-none d-sm-inline-block">
  <a href="#" class="nav-link">Contact</a>
</li*/}
                        </ul>
                        {/* SEARCH FORM */}
                        <form className="form-inline ml-3">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Right navbar links */}
                        <ul className="navbar-nav ml-auto">
                            {/* Notifications Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <i className="far fa-bell" />
                                    <span className="badge badge-warning navbar-badge">15</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown" style={{ marginTop: '-10px' }}>
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <img src="dist/img/user2-160x160.jpg" width="40px;" className="img-circle elevation-2" alt="User Image" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="profile.html" className="dropdown-item">
                                        <i className="fas fa-user mr-2" />Profile
          </a>
                                    <div className="dropdown-divider" />
                                    <a href="operations.html" className="dropdown-item">
                                        <i className="fas fa-cog mr-2" />Settings
          </a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-times mr-2" />Logout
          </a>
                                </div>
                            </li>
                            {/*li class="nav-item">
  <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
      class="fas fa-th-large"></i></a>
</li*/}
                        </ul>
                    </nav>
                    {/* /.navbar */}
                    {/* Main Sidebar Container */}
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        {/* Brand Logo */}
                        <a href="index3.html" className="brand-link" style={{ backgroundColor: '#343a40' }}><center>
                            <img src="dist/img/Topupbox.png" alt="Topup-box Logo" width="180px;" height="50px;" className=" img-square" /></center>
                        </a>
                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="mt-3 pb-3" style={{ paddingTop: 15, marginBottom: '-20px' }}>
                                <div className="info">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={{ marginLeft: '-15px' }}>
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
                                                    <a href="wallethistory.html" className="nav-link">
                                                        <p>Business name 3</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="addbiz.html" className="nav-link">
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
                                        <Link to="/wallethistory" className="nav-link">
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
                                        <Link to="/settings" className="nav-link active">
                                            <i className="nav-icon fas fa-cog" />
                                            <p>Settings</p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}
                    </aside>
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">Settings</h1>
                                    </div>{/* /.col */}
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Settings</li>
                                        </ol>
                                    </div>{/* /.col */}
                                </div>{/* /.row */}
                            </div>{/* /.container-fluid */}
                        </div>
                        {/* /.content-header */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        {/* Default box */}
                                        <div className="card">
                                            <div className="card-header">
                                                <ul className="navbar nav">
                                                    <li className="btn btn-light"><Link to="/profile">Profile</Link></li>
                                                    <li className="btn btn-light"><Link to="/team">Team</Link></li>
                                                    <li className="btn btn-light"><Link to="/operations">Prefrence</Link></li>
                                                    <li className="btn btn-light"><Link to="/support">Support</Link></li>
                                                    <li className="btn btn-light active"><Link to="#">Set routing rules</Link></li>
                                                    <li className="btn btn-light"><Link to="apiWebHook">API &amp; WebHooks</Link></li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <h3 style={{ textAlign: 'center' }}>Routing Rules</h3>
                                                {/* bootstrap accordion start*/}
                                                <div id="accordion">
                                                    <div className="card">
                                                        <div className="card-header" id="headingOne">
                                                            <h5 className="mb-0">
                                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Routing by Amount
                        </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                            <div className="card-body"><form>
                                                                <div className="form-field">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped table-bordered table-hover" id="dealers">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>ID</th>
                                                                                    <th>Dealer</th>
                                                                                    <th>Status</th>
                                                                                    <th>Amount</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>apple tree</td>
                                                                                    <td><input type="checkbox" name="Status" style={{ width: 20, height: 20 }} /></td>
                                                                                    <td><input type="number" min={1} name="amount" placeholder="NGN" className="form-control" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>2</td>
                                                                                    <td>golden rule</td>
                                                                                    <td><input type="checkbox" name="Status" style={{ width: 20, height: 20 }} /></td>
                                                                                    <td><input type="number" min={1} name="amount" placeholder="NGN" className="form-control" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>3</td>
                                                                                    <td>golad</td>
                                                                                    <td><input type="checkbox" name="Status" style={{ width: 20, height: 20 }} /></td>
                                                                                    <td><input type="number" min={1} name="amount" placeholder="NGN" className="form-control" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>4</td>
                                                                                    <td>apple tree</td>
                                                                                    <td><input type="checkbox" name="Status" style={{ width: 20, height: 20 }} /></td>
                                                                                    <td><input type="number" min={1} name="amount" placeholder="NGN" className="form-control" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>5</td>
                                                                                    <td>golden rule</td>
                                                                                    <td><input type="checkbox" name="Status" style={{ width: 20, height: 20 }} /></td>
                                                                                    <td><input type="number" min={1} name="amount" placeholder="NGN" className="form-control" /></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <center><div className="form-field" style={{ marginTop: 20 }}>
                                                                    <input type="submit" defaultValue="Save Changes" className="btn btn-primary" />
                                                                </div></center>
                                                            </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0">
                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Routing by Network
                        </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                            <div className="card-body">
                                                                <form>
                                                                    <div className="form-field">
                                                                        <div className="table-responsive">
                                                                            <table className="table table-striped table-bordered table-hover" id="dealers">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Network</th>
                                                                                        <th>Dealer</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>MTN</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Airtel</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Glo</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>9mobile</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <center><div className="form-field" style={{ marginTop: 20 }}>
                                                                        <input type="submit" defaultValue="Save Changes" className="btn btn-primary" />
                                                                    </div></center>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" id="headingThree">
                                                            <h5 className="mb-0">
                                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Routing by Priority
                        </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                            <div className="card-body">
                                                                <p>If failed transaction &gt;=5 go to next order of priority.</p>
                                                                <form>
                                                                    <div className="form-field">
                                                                        <div className="table-responsive">
                                                                            <table className="table table-striped table-bordered table-hover" id="dealers">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Priority</th>
                                                                                        <th>Dealer</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>Priority 1</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Priority 2</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Priority 3</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Priority 4</td>
                                                                                        <td><select className="form-control">
                                                                                            <option>golad</option>
                                                                                            <option>apple tree</option>
                                                                                            <option>golden rule</option>
                                                                                        </select></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <center><div className="form-field" style={{ marginTop: 20 }}>
                                                                        <input type="submit" defaultValue="Save Changes" className="btn btn-primary" />
                                                                    </div></center>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* bootstrap archordion*/}
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                        {/* /.card */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /.content-wrapper */}
                        {/* Control Sidebar */}
                        <aside className="control-sidebar control-sidebar-dark">
                            {/* Control sidebar content goes here */}
                        </aside>
                        {/* /.control-sidebar */}
                        {/* Main Footer */}
                        <footer className="main-footer">
                            <strong>Copyright © 2021 <a href="http://">Topup Box</a>.</strong>
                            All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
                                <b>Version</b>
                            </div>
                        </footer>
                    </div>
                </>
 
            </div>
        )
    }
}

export default setRoutingRules
