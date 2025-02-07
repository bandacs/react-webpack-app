const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compiler = webpack(config);
const server = new WebpackDevServer({ ...config.devServer }, compiler);

server.startCallback(() => {
  console.log('Development server running on http://localhost:3000');
});
