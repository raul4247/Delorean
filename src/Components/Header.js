import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Header extends Component {
	render() {
		return (
  			<nav>
				<div className="nav-wrapper grey darken-4">
					<a className="brand-logo center">Delorean</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/NewItems">New Items</Link></li>
						<li><Link to="/About">About</Link></li>
					</ul>
				</div>
			</nav>
			)
	}
}

export default Header