import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Routes } from '../routes/Routes'


import {
    Dashboard as Dashboard,
    Transactions as Transactions,
    walletHostory as walletHistory,
    Fundwallet as Fundwallet
    
} from './components';
import SideBar from '../pages/sideBarMenu/SideBar';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/dashboard"
            />
            <Routes
                component={Dashboard}
                exact
                layout={SideBar}
                path="/dashboard"
            />
            <Routes
                component={Transactions}
                exact
                layout={SideBar}
                path="/transactions"
            />
            <Routes
                component={Fundwallet}
                exact
                layout={SideBar}
                path="/fundwallet"
            />
            <RouteWithLayout
                component={walletHistory}
                exact
                layout={SideBar}
                path="/walletHistory"
            />
            </Switch>
    );
}