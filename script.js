var element = React.createElement('div', {}, 'Hello world!');

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'https://fotomyk.pl/images/inbook/medium/5b/5bb403281cd5055036ae3784d53d047c.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
	},
	{
		id: 3,
		title: 'Fight Club',
		desc: 'Film o podziemnym kregu',
		img: 'https://ae01.alicdn.com/kf/HTB1MXGwIVXXXXaQapXXxh4dFXXXK/Gor-ca-wyprzeda-Moda-domu-niestandardowych-dekoracji-tv-show-fight-club-tapety-stylowy-pp-gule-plakat.jpeg_640x640.jpeg'
	},
	{
		id: 4,
		title: 'Snatch',
		desc: 'Film o przekretach',
		img: 'https://i.pinimg.com/originals/c0/c2/5d/c0c25ddf37cf270cb5552a83bd158a9e.jpg'
	}
  ];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('img', {
			src: movie.img
			}),
		React.createElement('p', {}, movie.desc)
		);
	});

var element =
	React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
);




ReactDOM.render(element, document.getElementById('app'));