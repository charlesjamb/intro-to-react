const React = require('react');

const GuessTheNumberV2 = React.createClass({
	getInitialState: function() {
		return {}
	},
	_startgame: function() {
		this.setState({
			gameStatus: 'playing',
			numberToGuess: parseInt(100*Math.random()),
			guesses: [],
			limit: 5
		})
	},
	componentDidMount: function() {
		this._startgame();
	},
	_handleButtonClick: function() {
		let numToGuess = this.state.numberToGuess;
		let numGuessed = +this.refs.userGuess.value;
		let guessLeft = this.state.limit - 1;

		this.setState({
			guesses: this.state.guesses.concat(numGuessed, ' '),
			limit: guessLeft
		})

		if (numToGuess === numGuessed) {
			this.setState({
				gameStatus: 'win'
			})
		}
		else if (numToGuess > numGuessed) {
			alert('TRY HIGHER');
		}
		else {
			alert('TRY LOWER');
		}

	},
	render: function() {
		if (this.state.gameStatus === 'win') {
			return (
				<div>
					<h2>YOU WON :)</h2>
					<button onClick={this._startgame}>NEW GAME</button>
				</div>
			);
		}
		else if (this.state.limit === 0) {
			return (
				<div>
					<h2>GAME OVER :(</h2>
					<button onClick={this._startgame}>NEW GAME</button>
				</div>
			);
		}
		else {
			return (
				<div>
					<h2>Guess a number between 1 and 100</h2>
					<input type='text' ref='userGuess'/>
					<button onClick={this._handleButtonClick}>GUESS</button>
					<p>You have {this.state.limit} guess</p>
					<p>You guessed: {this.state.guesses}</p>
				</div>
			);
		}	
	}
});

module.exports = GuessTheNumberV2;