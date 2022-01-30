const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		createProxyMiddleware(['/v1', '/v2'], {
			target: 'https://kapi.kakao.com',
			changeOrigin: true
		})
	)
}
