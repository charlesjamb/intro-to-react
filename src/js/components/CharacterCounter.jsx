// Libraries
const React = require('react');

///////////////////////////////////////////////////////////////////////////////
const CharacterCounter = React.createClass({
	getInitialState: function() {
		return {
			currentInput: 0,
			currentInputText: 'Your input has no character'
		}
	},
	_handleInput: function(event) {
		let value = event.target.value;
		let valueText = this.state.currentInputText;
		if (value.length == 1) {
			valueText = `Your input has one character`;
		}
		else if (value.length == 0) {
			valueText = `Your input has no character`;
		}
		else {
			valueText = `Your input has ${value.length} characters`;
		}

		this.setState({
			currentInput: value.length,
			currentInputText: valueText
		});
	},
	render: function() {
		return (
			<div>
				<h2>Character Counter</h2>
				<input onInput={this._handleInput}/>
				<p>{this.state.currentInputText}</p>
			</div>
		);
	}
});

module.exports = CharacterCounter;