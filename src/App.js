import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import SoftDashboard from "./SoftDashboard";
import Rui from "./Rui";
import SoftComponents from "./SoftComponents";
import SoftForm from "./SoftForm";

const Home = () => {
	return <div>Hello World</div>;
};
class App extends React.Component {
	render() {
		return (
			<div id="wrapper" style={{ backgroundColor: "#fffff" }}>
				<HashRouter>
					<Switch>
						<Route exact path="/" component={SoftDashboard} />
						<Route exact path="/Rui" component={Rui} />
						<Route
							exact
							path="/SoftDashboard"
							component={SoftDashboard}
						/>
						<Route
							exact
							path="/SoftComponents"
							component={SoftComponents}
						/>
						<Route exact path="/SoftForm" component={SoftForm} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default App;
