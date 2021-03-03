import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";


// Pages
import Dashboard from '../src/components/pages/sideBarMenu/dashboard/Dashboard';
import Transactions from "../src/components/transactions/transactions"

import Header from "../src/components/header/Header";
import walletHistory from "../src/components/walletHistory/walletHistory";
import settings from "../src/components/settings/settings"


import Profile from '../src/components/settings/profile/profile';
import team from '../src/components/settings/team/team';
import Addbiz from "../src/components/addBiz/Addbiz";
import Support from '../src/components/settings/support/support';
import Operations from "../src/components/operation/Operations";
import fundwallet from "./components/fundWallet/fundwallet";
import SetRoutingRules from './components/settings/setRoutingRules/setRoutingRules';
import ApiWebhook from './components/settings/APIhooks/apiWebhook';



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>


                    <Route exact path="/"
                        component={Dashboard}/>
                    <Route exact path="/transactions"
                        component={Transactions}/>
                    <Route exact path="/walletHistory"
                         component={walletHistory}/>
                    <Route exact path="/fundwallet"
                        component={fundwallet}/>
                    <Route exact path="/settings"
                        component={settings}/>
                        <Route exact path="/profile"
                        component={Profile}/>
                        <Route exact path='/team' component={team}/>
                        <Route exact path='/support' component={Support}/>
                        <Route exact path='/setRoutingRules' component={SetRoutingRules}/>
                        <Route exact path='/operations' component={Operations}/>
                        <Route exact path='apiWebhook' component={ApiWebhook}/>




                </Switch>

            </Router>
        );

    }
}
export default App;
