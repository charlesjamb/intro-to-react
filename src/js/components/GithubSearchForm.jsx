// Libraries
const React = require('react');

///////////////////////////////////////////////////////////////////////////////
const GithubSearchForm = React.createClass({
  propTypes: {
  	onSearch: React.PropTypes.func
  },
  _handleSubmit: function(e) {
  	e.preventDefault();
  	let input = this.refs.userInput.value;
  	this.props.onSearch(input);
  },
  render: function() {
    return (
      <form className="search-form" onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput"/>
        <button>Go!</button>
      </form>
    );
  }
});

module.exports = GithubSearchForm;