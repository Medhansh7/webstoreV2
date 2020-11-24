import React, { Component } from 'react'
import Landing from './components/Landing'
import Checkout from './components/Checkout'
import Error from './components/Error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/error" exact component={Error} />
                </Switch>
            </div>
        </Router>

    )
}
