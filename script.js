var element = React.createElement('div', {}, 'Hello world!');

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'https://fotomyk.pl/images/inbook/medium/5b/5bb403281cd5055036ae3784d53d047c.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		src: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
	},
	{
		id: 3,
		title: 'Fight Club',
		desc: 'Film o podziemnym kregu',
		src: 'https://ae01.alicdn.com/kf/HTB1MXGwIVXXXXaQapXXxh4dFXXXK/Gor-ca-wyprzeda-Moda-domu-niestandardowych-dekoracji-tv-show-fight-club-tapety-stylowy-pp-gule-plakat.jpeg_640x640.jpeg'
	},
	{
		id: 4,
		title: 'Snatch',
		desc: 'Film o przekretach',
		src: 'https://i.pinimg.com/originals/c0/c2/5d/c0c25ddf37cf270cb5552a83bd158a9e.jpg'
	}
];


var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.object.isRequired,
	},

	render: function() {
		console.log(this.props);
		return (
			React.createElement('p', {}, this.props.description.desc)
		)
	},
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.object.isRequired,
	},

	render: function() {
		console.log(this.props);
		return (
			React.createElement('h2', {}, this.props.title.title)
		)
	},
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},

	render: function() {
		console.log(this.props);
		return (
			React.createElement('img', {src: this.props.image.src})
		)
	},
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},

	render: function() {
		console.log(this.props.movie.id);
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {title : this.props.movie}),
				React.createElement(MovieImage, {image : this.props.movie}),
				React.createElement(MovieDescription, {description : this.props.movie}),
			)
		)
	},
});

var MoviesList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},
	
	render: function() {
		var movieslist = this.props.items.map(function(movieitem) {
			//console.log(movieitem);
			return React.createElement(Movie, {movie: movieitem});
		});

		return (
			React.createElement('ul', {}, movieslist)
		);
	}
});


var list = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MoviesList, {items : movies})
	);

ReactDOM.render(list, document.getElementById('app'));