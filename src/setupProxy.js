const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/board',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/sentence',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/review',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
        })
    );
};