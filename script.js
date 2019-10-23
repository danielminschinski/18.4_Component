var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		posterImg: 'https://ae01.alicdn.com/kf/HTB1XU9TOVXXXXbiapXXq6xXFXXXn/Obraz-na-p-tnie-na-zam-wienie-Harry-Potter-plakat-Harry-Potter-naklejki-cienne-Harry-Porter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		posterImg: 'https://ssl-gfx.filmweb.pl/po/63/16/776316/7892306.3.jpg'
	},
	{
		id: 3,
		title: 'Joker',
		desc: 'Amerykański dramat psychologiczny',
		posterImg: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSKQyxhp32zymjvpPFyoyplR35o20qpkh0raONZ_JsTG7Gf1w78'
	},
	{
		id: 4,
		title: 'Szybcy i wściekli 8',
		desc: 'Amerykański film akcji',
		posterImg: 'https://csn.naekranie.pl/wp-content/uploads/2015/04/fast.jpg' 

	}
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			React.createElement('li', {},
				React.createElement('h2', {}, this.props.movie.title),
				React.createElement('p', {}, this.props.movie.desc),
				React.createElement('img', { src: this.props.movie.posterImg, alt: 'plakat filmu' })
			)
		);
	}

});

var MovieList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},
	render: function(){
		var movies = this.props.movies.map(function(movie){
			return React.createElement(Movie, {movie, key: movie.id})
		});

		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, movies)
			)
		);
	}
});

var element = React.createElement(MovieList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));



/*var image = {
	name:  'Kotek',
	src: 'http://imgur.com/n8OYCzR.png'
};

var GalleryItem = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},

	render: function(){
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, this.props.image.name),
				React.createElement('img', {src: this.props.image.src})
			)
		)
	},	
});

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));*/