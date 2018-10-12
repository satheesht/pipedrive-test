/*
* All routes are imported here and fed to express.js
*/
const url = require('url')

const register = (app) => {
	const importRoutes = require('./import/routes')
	const searchRoutes = require('./search/routes')

	app.all('*', (req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Auth-Token');
		if (req.method.toLowerCase() === 'options') {
			res.status(200).end();
		} else {
			next();
		}
	})

	app.get('/client/*', (req, res, next) => {
		const path = url.parse(req.originalUrl).pathname
		res.sendFile(require.resolve(`../client/build/${path.replace('/client', '')}`))
	})

	app.use('/import', importRoutes)
	app.use('/search', searchRoutes)

	app.use((req, res) => {
		if (req.headers.accept.indexOf('html') > -1) {
			return res.sendFile(require.resolve('../client/build/index.html'))
		}
		res.status(404)
		res.send({ message: `route ${req.method} of ${req.originalUrl} does not exists` })
	})
}

module.exports = { register }
