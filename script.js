var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'https://ae01.alicdn.com/kf/HTB1XU9TOVXXXXbiapXXq6xXFXXXn/Obraz-na-p-tnie-na-zam-wienie-Harry-Potter-plakat-Harry-Potter-naklejki-cienne-Harry-Porter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		src: 'https://ssl-gfx.filmweb.pl/po/63/16/776316/7892306.3.jpg'
	},
	{
		id: 3,
		title: 'Joker',
		desc: 'Amerykański dramat psychologiczny',
		src: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSKQyxhp32zymjvpPFyoyplR35o20qpkh0raONZ_JsTG7Gf1w78'
	},
	{
		id: 4,
		title: 'Szybcy i wściekli 8',
		desc: 'Amerykański film akcji',
		src: 'https://csn.naekranie.pl/wp-content/uploads/2015/04/fast.jpg' 

	}
];

var Movie = React.createClass({

    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render() {

        var movie = this.props.movie;

        return React.createElement('li', {},
                React.createElement(MovieTitle, {title: movie.title}),
                React.createElement(MovieDesc, {desc: movie.desc}),
                React.createElement(MovieImage, {src: movie.src, alt: movie.title})
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
    },
    render() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string,
    },

    render() {
        return (
           React.createElement('p', {}, this.props.desc)
        )
    },
})

var MovieImage = React.createClass({
    propTypes: {
        src: React.PropTypes.string,
        alt: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('img', {src: this.props.src, alt: this.props.alt})
        )
    },
});

var MoviesList = React.createClass({
    render() {
        var moviesElements = movies.map(function (movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        })

        return React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
        )
    }
});

var element = React.createElement(MoviesList);
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