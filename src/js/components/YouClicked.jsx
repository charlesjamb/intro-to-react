const React = require('react');

const YouClicked = React.createClass({
	getInitialState: function() {
		return	{
			timesClicked: 0,
			timesClickedText: 'You never clicked the button',
			timesReset: 0,
			timesResetText: 'You never clicked reset'
		}
	},
	_handleButtonClick: function() {
		let click= this.state.timesClicked +1;
		let clickText = this.state.timesClickedText;
		if (click == 1) {
			 clickText = 'You clicked the button once'
		}
		else if (click == 2) {
			clickText = 'You clicked the button twice'
		}
		else {
			clickText = `You clicked the button ${click} time`
		}
		
		this.setState({
			timesClicked: click,
			timesClickedText: clickText
		});
	},
	_handleButtonReset: function() {
		let reset = this.state.timesReset +1;
		let resetText = this.state.timesResetText;
		if (reset == 1) {
			resetText = 'You clicked reset once'
		}
		else if (reset == 2) {
			resetText = 'You clicked reset twice'
		}
		else {
			resetText = `You clicked reset ${reset} times`
		}

		this.setState({
			timesClicked: 0,
			timesClickedText: 'You never clicked the button',
			timesReset: reset,
			timesResetText: resetText
		})
	},
	render: function() {
		return (
			<div>
				<button onClick={this._handleButtonClick}>Click me</button>
				<button onClick={this._handleButtonReset}>Reset me</button>
				<p>{this.state.timesClickedText}</p>
				<p>{this.state.timesResetText}</p>
			</div>
		);
	}
});

module.exports = YouClicked;