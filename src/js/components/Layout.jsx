// Libraries
const React = require('react');

///////////////////////////////////////////////////////////////////////////////
const Layout = React.createClass({
	render: function() {
		return (
			<div className="layout">
				<nav className="main-nav">
					<ul className="sub-nav">
						<li><a href="/">Reload</a></li>
					</ul>
				</nav>
				<main>
			    	{this.props.children}
				</main>
				<footer>
			    	Copywhat 2016
				</footer>
			</div>
		);
	}
});

module.exports = Layout;