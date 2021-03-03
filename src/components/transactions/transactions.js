import React, {Component} from 'react'
import {Link} from "react-router-dom"

import SideBar from '../pages/sideBarMenu/SideBar';
import Header from '../header/Header';

class Transactions extends Component {
state = {
    displayNav: true
}

onDisplayNav = () => {
    this.setState({
        displayNav: !this.state.displayNav
    })
}

style = {
    display: 'none'
}

render() {
    const {displayNav} = this.state;
    return (
<div>
            {/* Main Header menu */}
            <Header/>
           {/* NavBar */}
           {/* Main sidebar menu */}
            <SideBar/>

                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Transactions</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Transactions</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */} </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    {/* Default box */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Title</h3>
                                            {/*div class="card-tools">
                                                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                      <i class="fas fa-minus"></i></button>
                                                    <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                      <i class="fas fa-times"></i></button>
                                                  </div*/} </div>
                                        <div className="row card-body">
                                            <section className="col-md-6 content">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            {/* Default box */}
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Filter</h3>
                                                                    {/*div class="card-tools">
                                                                            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                                              <i class="fas fa-minus"></i></button>
                                                                            <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                                              <i class="fas fa-times"></i></button>
                                                                          </div*/} </div>
                                                                <div className="card-body">
                                                                    <div className="panel-body">
                                                                        <form className="form-field">
                                                                            <div>
                                                                                <label style={
                                                                                    {fontFamily: 'roboto'}
                                                                                }>By Date</label>
                                                                                <input type="date" className="form-control" name="daterange"/>
                                                                            </div>
                                                                            <div 
                                                                            style={{
                                                                                    marginTop: 10,
                                                                                    fontFamily: 'roboto'}}
                                                                                
                                                                            
                                                                            >
                                                                                <label>Tansaction Status</label>
                                                                                <select className="form-control">
                                                                                    <option>All</option>
                                                                                    <option>Successful</option>
                                                                                    <option>Failed</option>
                                                                                    <option>Reversed</option>
                                                                                </select>
                                                                            </div>
                                                                            <div>
                                                                                <div className="row pull-right"
                                                                                    style={
                                                                                        {paddingRight: 20}
                                                                                    }
                                                                                    />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    {/* /.card-body */}
                                                                    <div className="card-footer">
                                                                        <div className="float-right">
                                                                            <button className="btn btn-primary">
                                                                                Export CSV
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    {/* /.card-footer*/} </div>
                                                                {/* /.card */} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="col-md-6 content">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            {/* Default box */}
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Weekly Balance</h3>
                                                                    {/*div class="card-tools">
                                                                                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                                                  <i class="fas fa-minus"></i></button>
                                                                                <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                                                  <i class="fas fa-times"></i></button>
                                                                              </div*/} </div>
                                                                <div className="card-body">
                                                                    <div className="panel-body">
                                                                        {/* <div style={{height:'300px', width:'100%'}}></div> */}
                                                                        <div className="table-responsive">
                                                                            <table className="table table-striped table-bordered table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Total Credit Weekly</th>
                                                                                        <th>Total Debit Weekly</th>
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
                                                                    {/* <div style="height:300px;width:100%;"></div> */}
                                                                </div>
                                                                {/* /.card-body */}
                                                                {/*div class="card-footer">
                                                                          Footer
                                                                        </div*/}
                                                                {/* /.card-footer*/} </div>
                                                            {/* /.card */} </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        {/* /.card-body */}
                                        {/*div class="card-footer">
                                                  Footer
                                                </div*/}
                                        {/* /.card-footer*/} </div>
                                    {/* /.card */} </div>
                            </div>
                        </div>
                    </section>
                    {/* /.content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    {/* Default box */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Transaction Table</h3>
                                            {/*div class="card-tools">
                                                            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                              <i class="fas fa-minus"></i></button>
                                                            <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                              <i class="fas fa-times"></i></button>
                                                          </div*/} </div>
                                        <div className="card-body">
                                            <div className="panel-body">
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Status</th>
                                                                <th>Date</th>
                                                                <th>Customer Reference</th>
                                                                <th>Beneficiary</th>
                                                                <th>Dealer ID</th>
                                                                <th>Face Value</th>
                                                                <th>Discounted amount</th>
                                                                <th>Remarks</th>
                                                                <th>Previous Balance</th>
                                                                <th>Balance</th>
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
                                                                <td>jfk</td>
                                                                <td className="center">j</td>
                                                                <td>kfm</td>
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
                                                                <td>jfk</td>
                                                                <td className="center">j</td>
                                                                <td>kfm</td>
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
                                                                <td>jfk</td>
                                                                <td className="center">j</td>
                                                                <td>kfm</td>
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
                                                                <td>jfk</td>
                                                                <td className="center">j</td>
                                                                <td>kfm</td>
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
                                                                <td>jfk</td>
                                                                <td className="center">j</td>
                                                                <td>kfm</td>
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
                                                                <td>jfk</td>
                                                                <td className="center">j</td>
                                                                <td>kfm</td>
                                                                <td>kfm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <div className="float-right">
                                                    <button className="btn btn-primary">
                                                        Refresh Transaction</button>
                                                </div>
                                            </div>
                                            {/* /.card-footer*/} </div>
                                        {/* /.card */} </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */} </aside>
                {/* /.control-sidebar */}
                {/* Main Footer */}
                <footer className="main-footer">
                    <strong>Copyright © 2021
                        <a href="http://">Topup Box</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b>
                    </div>
                </footer>
            </div>


        )
    }
}

export default Transactions
