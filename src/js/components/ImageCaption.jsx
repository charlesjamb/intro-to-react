const React = require('react');

///////////////////////////////////////////////////////////////////////////////
let imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

///////////////////////////////////////////////////////////////////////////////
const ImageCaption = React.createClass({
	propTypes: {
		source: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	},
	render: function() {
		return (
			<figure>
				<img key={this.props.id} src={this.props.source}/>
				<figcaption>
					{this.props.text}
				</figcaption>
			</figure>
		);
	}
});

module.exports = ImageCaption;