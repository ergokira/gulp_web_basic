module.exports = function() 
{
	var client = './app';

	var temp = './tmp/';

	var config =
	{
		temp: temp,

		/* 
		* Files paths
		*/
		alljs:
		[ 
			'./app/**/*.js',
			'./*.js'
		],
		app: app,
		index: app + 'index.html',

		/* 
		* Bower and NPM locations
		*/
		bower: 
		{
			json: require('./bower.json'),
			directory: './bower_components/',
			ignorePath: '../..'
		}

	};

	return config;
};