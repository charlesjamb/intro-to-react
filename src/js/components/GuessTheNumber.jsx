// Libraries
const React = require('react');

///////////////////////////////////////////////////////////////////////////////
const GuessTheNumber = React.createClass({
	propTypes: {
		numberToGuess: React.PropTypes.number.isRequired
	},
	_handleButtonClick: function() {
  		let numToGuess = this.props.numberToGuess;
  		let numGuessed = +this.refs.userGuess.value;
		if (numGuessed == numToGuess) {
			alert('Savage!');	
		}
		else if (numGuessed > numToGuess) {
			alert('Try lower!');
		}
		else {
			alert('Try higher!');
		}
  	},
	render: function() {
		return (
			<div>
				<input type="text" ref="userGuess"/>
				<button onClick={this._handleButtonClick}>Click me!</button>
			</div>
		);	
	}
});

module.exports = GuessTheNumber;