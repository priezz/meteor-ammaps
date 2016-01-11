Package.describe({
	name: 'priezz:ammap',
	summary: "amMap wrapper",
	version: "3.17.1",
	git: "https://github.com/priezz/meteor-ammap.git"
})


Npm.depends({
	// 3.17.1
	// 'upper-case':'1.1.2',
	// "ammap3": "https://github.com/amcharts/ammap3/archive/b374135fabb00d3742a38333e68e7a9e8d271522.tar.gz"

})


Package.onUse(function(api) {
	api.versionsFrom('1.2')

	api.use('cosmos:browserify@0.8.0', 'client');
	api.addFiles('client.browserify.js', 'client')

	// api.export('AmMap', 'client')
	// api.export('uppercase', 'client')
})

