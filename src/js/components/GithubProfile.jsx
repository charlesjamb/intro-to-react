// Libraries
const React = require('react');
const $ = require('jquery');

///////////////////////////////////////////////////////////////////////////////
const GithubProfile = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {}
	},
	componentDidMount: function() {
		this.fetchData();
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (prevProps.username !== this.state.username) {
			this.fetchData();
		}
	},
	fetchData: function() {
		$.getJSON(`https://api.github.com/users/${this.props.username}`, data => {
			this.setState({
				avatarUrl: data.avatar_url,
				usernameUser: data.login,
				nameUser: data.name,	
				bioUser: data.bio
			})
		});
	},
	render: function() {
		return (
			<div className="github-user">
			  <img className="github-user-avatar" src={this.state.avatarUrl}/>
				  <div className="github-user-info">
				    <p>{this.state.usernameUser} ({this.state.nameUser})</p>
				    <p>{this.state.bioUser}</p>
				  </div>
			</div>
		);
	}
})

module.exports = GithubProfile;