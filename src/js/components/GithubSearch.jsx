// Libraries
const React = require('react');

// Components
const GithubProfile = require('./GithubProfile');
const GithubSearchForm = require('./GithubSearchForm');

///////////////////////////////////////////////////////////////////////////////
const GithubSearch = React.createClass({
  getInitialState: function() {
    return {};
  },
  _handleSearch: function(searchTerm) {
    // console.log(searchTerm);
    this.setState({
      user: searchTerm
    })
  },
  render: function() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch}/>
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
});

module.exports = GithubSearch;