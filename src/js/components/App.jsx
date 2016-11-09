// Libraries
const React = require('react');

// Components
const Layout = require('./Layout');

const ImageCaption = require('./ImageCaption');

const GuessTheNumber = require('./GuessTheNumber');
const GuessTheNumberV2 = require('./GuessTheNumberV2');
const YouClicked = require('./YouClicked');

const CharacterCounter = require('./CharacterCounter');
const CharacterLimit = require('./CharacterLimit');

const GithubProfile = require('./GithubProfile');
const GithubSearch = require('./GithubSearch');
const GithubSearchForm = require('./GithubSearchForm');

///////////////////////////////////////////////////////////////////////////////
const App = React.createClass({
  _renderImage: function(imgObj) {
		return <ImageCaption key={imgObj.id} source={imgObj.source} text={imgObj.text}/>
  },
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <Layout>
        	<GithubSearch/>
        </Layout>
      </main>
    );
  }
});

module.exports = App;