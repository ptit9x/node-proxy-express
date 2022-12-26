const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

// mount `exampleProxy` in web server
const app = express()
app.use('/api', createProxyMiddleware({ target: 'https://c900-58-186-90-123.ap.ngrok.io', changeOrigin: true }))
app.listen(4000)
