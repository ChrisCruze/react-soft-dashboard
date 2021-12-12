
import React, {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import SoftDashboard from "./SoftDashboard";


const Home = () => {
    return (
        <div>
            Hello World
        </div>
    )
}
class App extends React.Component {
    render() {
        return (
            <div id="wrapper" style={{backgroundColor:'#fffff'}}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={SoftDashboard} />
  

                    </Switch>
                </HashRouter>
            </div>
        )}
}


export default App
