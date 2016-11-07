const React = require('react');

var ImageCaption = React.createClass({
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