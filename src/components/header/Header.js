import React, {Component}from 'react'
import {Link} from 'react-router-dom'
import img1 from '../img/user2-160x160.jpg'
import {Navbar, NavDropdown, Dropdown, DropdownButton} from 'react-bootstrap'
import { DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      
      <div className="wrapper">
        {/* Navbar */}
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
</li*/} </ul>
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
                  <i className="fas fa-envelope mr-2" />
                  4 new messages
                                        <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" />
                  8 friend requests
                                        <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" />
                  3 new reports
                                        <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
              </div>
            </li>

            {/* This start image dropdown snippet */}
            {/* <li className="Navbar-item dropdown"> */}
            <li className="nav-item dropdown"
              style={
                { marginTop: '-10px' }
              }>

            </li>
            <li>
             <Dropdown>
            
             
              <DropdownItem>
                  
    </DropdownItem>
              </Dropdown>
            
            </li>
            
            {/*li class="nav-item">
  <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
      class="fas fa-th-large"></i></a>
</li*/} </ul>
        </nav>
        </div>
     );
  }
}
 
export default Header;