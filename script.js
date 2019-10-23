var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},

	render: function(){
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, , this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},	
});