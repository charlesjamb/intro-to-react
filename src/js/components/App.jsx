const React = require('react');

const ImageCaption = require('./ImageCaption');

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

const App = React.createClass({
  renderImage: function(arr) {
	return (<div>
	{
		arr.map(item => <ImageCaption key={item.id} source={item.source} text={item.text}/>)
	}
	</div>);
  },
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>Testing ImageCaption</h2>
        	<ImageCaption key={41} source="http://placekitten.com/g/210/210" text="This is a kittenz!"/>
        <hr/>
        <h2>Render Image Method</h2>
        	<div>{this.renderImage(imageList)}</div>
        <hr/>
      </main>
    );
  }
});

module.exports = App;