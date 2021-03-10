import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, NavBar } from 'reactstrap';
import SideBar from "../SideBar";
import Header from "../../../header/Header";

import { merchantSignUp } from "../../../../store/action";
import { connect } from "react-redux";


class Dashboard extends Component {
    state = {
        displayNav: true
    }
    componentDidMount() {
        this.props.merchantSignUp({
            address:	"28 ac",
businessName: "glo",
dealerId: "121003",
emailAddress: "tosinadeyemi.98@gmail.com",
firstName: "tosin",
lastName: "adeyemi",
password: "adeyemi1234",
phoneNumber: "08066468151",
role:"admin",
transactionPin:"234501",
username: "ademitosin"})
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
                <Header />
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <SideBar />
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">
                                        Dashboard
                                                <small style={
                                            { fontSize: 15 }
                                        }>control center</small>
                                    </h1>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                                {/* /.col */}
                                {" "} </div>
                            {/* /.row */}
                            {" "} </div>
                        {/* /.container-fluid */}
                        {" "} </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <div className="container-fluid">
                        {/* Info boxes */}
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box">
                                    <span className="info-box-icon bg-info elevation-1"
                                        style={
                                            {
                                                width: 50,
                                                height: 50
                                            }
                                        }>
                                        <i className="fas fa-thumbs-up" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text"
                                            style={
                                                { fontWeight: "bold" }
                                            }>
                                            Total Transactions
                                                </span>
                                        <span>
                                            10
                                                    <small>%</small>
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                    {" "} </div>
                                {/* /.info-box */}
                                {" "} </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1"
                                        style={
                                            {
                                                width: 50,
                                                height: 50
                                            }
                                        }>
                                        <i className="fas fa-thumbs-up" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text"
                                            style={
                                                { fontWeight: "bold" }
                                            }>
                                            Successful Transactons
                                                </span>
                                        <span>41,410</span>
                                    </div>
                                    {/* /.info-box-content */}
                                    {" "} </div>
                                {/* /.info-box */}
                                {" "} </div>
                            {/* /.col */}
                            {/* fix for small devices only */}
                            <div className="clearfix hidden-md-up" />
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1"
                                        style={
                                            {
                                                width: 50,
                                                height: 50
                                            }
                                        }>
                                        <i className="fas fa-thumbs-down" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text"
                                            style={
                                                { foproifntWeight: "bold" }
                                            }>
                                            Failed Transactions
                                                </span>
                                        <span>760</span>
                                    </div>
                                    {/* /.info-box-content */}
                                    {" "} </div>
                                {/* /.info-box */}
                                {" "} </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1"
                                        style={
                                            {
                                                width: 50,
                                                height: 50
                                            }
                                        }>
                                        <i className="fas fa-thumbs-down" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text"
                                            style={
                                                { fontWeight: "bold" }
                                            }>
                                            Dispute Transactions
                                                </span>
                                        <span>2,000</span>
                                    </div>
                                    {/* /.info-box-content */}
                                    {" "} </div>
                                {/* /.info-box */}
                                {" "} </div>
                            {/* /.col */}
                            {" "} </div>
                        {/* /.row */}
                        <div className="card">
                            {" "}
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <h3 className="card-title">Weekly Recap Report</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div className="position-relative mb-4">
                                                        <canvas id="sales-chart"
                                                            height={200} />
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-end">
                                                        <span className="mr-2">
                                                            <i className="fas fa-square text-primary" />
                                                            Total Tansaction
                                                                </span>
                                                        <span>
                                                            <i className="fas fa-square text-gray" />{" "}
                                                            Successful Transaction
                                                                </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="text-center">
                                                    <strong>Daily Transaction Track</strong>
                                                </p>
                                                <div className="progress-group">
                                                    Successful Transactions
                                                            <span className="float-right">
                                                        <b>720</b>/1000
                                                            </span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-primary"
                                                            style={
                                                                { width: "72%" }
                                                            } />
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                <div className="progress-group">
                                                    Failed Transactions
                                                            <span className="float-right">
                                                        <b>100</b>/1000
                                                            </span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-danger"
                                                            style={
                                                                { width: "10%" }
                                                            } />
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                <div className="progress-group">
                                                    <span className="progress-text">
                                                        Dispute Transactions
                                                            </span>
                                                    <span className="float-right">
                                                        <b>180</b>/1000
                                                            </span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-success"
                                                            style={
                                                                { width: "18%" }
                                                            } />
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                <div className="progress-group">
                                                    Total Transactions
                                                            <span className="float-right">
                                                        <b>1000</b>/1000
                                                            </span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-warning"
                                                            style={
                                                                { width: "100%" }
                                                            } />
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                {" "} </div>
                                            {/* /.col */}
                                            {" "} </div>
                                    </div>
                                    {" "}
                                    {/* /.row */}
                                    {/* ./card-body */}
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-success">
                                                        <i className="fas fa-caret-up" />
                                                        17%
                                                            </span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span>Daily Transactions</span>
                                                </div>
                                                {/* /.description-block */}
                                                {" "} </div>
                                            {/* /.col */}
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-warning">
                                                        <i className="fas fa-caret-left" />
                                                        0%
                                                            </span>
                                                    <h5 className="description-header">$10,390.90</h5>
                                                    <span>Daily Successful Transactions</span>
                                                </div>
                                                {/* /.description-block */}
                                                {" "} </div>
                                            {/* /.col */}
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-success">
                                                        <i className="fas fa-caret-up" />
                                                        20%
                                                            </span>
                                                    <h5 className="description-header">$24,813.53</h5>
                                                    <span>Daily Profit</span>
                                                </div>
                                                {/* /.description-block */}
                                                {" "} </div>
                                            {/* /.col */}
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block">
                                                    <span className="description-percentage text-danger">
                                                        <i className="fas fa-caret-down" />
                                                        18%
                                                            </span>
                                                    <h5 className="description-header">1200</h5>
                                                    <span>Daily Failed Transactions</span>
                                                </div>
                                                {/* /.description-block */}
                                                {" "} </div>
                                        </div>
                                        {/* /.row */}
                                        {" "} </div>
                                    {/* /.card-footer */}
                                    {" "} </div>
                                {/* /.card */}
                                {" "} </div>
                        </div>
                        {/* Main row */}
                        {/* TABLE: LATEST ORDERS */}
                        <div className="card">
                            <div>
                                <h3 className="card-title"
                                    style={
                                        {
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 8,
                                            fontWeight: "bold"
                                        }
                                    }>
                                    Recent Transactions
                                        </h3>
                            </div>
                            {/* /.card-header */}
                            <div className="col-md-12">
                                <div className="table-responsive card">
                                    <table className="table table-striped table-bordered table-hover" id="dataTables-example" onload="JavaScript:AutoRefresh(12000);">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Customer Reference</th>
                                                <th>Beneficiary</th>
                                                <th>Dealer ID</th>
                                                <th>Face Value</th>
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
                                        </tbody>
                                    </table>
                                </div>
                                {/* /.table-responsive */}
                                {" "} </div>
                        </div>
                        {/* /.card-body */}
                        {/* /.card-footer */}
                        {/* /.card */}
                        {" "} </div>
                    {/* /.col */}
                    {/* /.row */}
                    {" "} </div>
                {
                        /*/.container - fluid * /
                    }
                        {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                    {" "} </aside>
                {/* /.control-sidebar */}

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


        );
    }
}


export default connect(null, { merchantSignUp })(Dashboard);