// Libraries
const React = require('react');

///////////////////////////////////////////////////////////////////////////////
const CharacterLimit = React.createClass({
	propTypes: {
		limit: React.PropTypes.number.isRequired
	},
	getInitialState: function() {
		return {
			currentInput: '',
		}
	},
	_handleInput: function(event) {
		let value = event.target.value;

		if (value.length <= this.props.limit) {
			this.setState({
				currentInput: value,
			});
		}
	},
	render: function() {
		return (
			<div>
				<h2>Character Limit</h2>
				<input onInput={this._handleInput} value={this.state.currentInput}/>
				<p>Characters remaining: {this.props.limit - this.state.currentInput.length}</p>
			</div>
		);
	}
});

module.exports = CharacterLimit;