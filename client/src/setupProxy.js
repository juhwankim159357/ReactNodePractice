const { createProxyMiddleware } = require("http-proxy-middleware")
//test
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://fervent-einstein-b3e38f.netlify.app/',
            changeOrigin: true,
        })
    )
}