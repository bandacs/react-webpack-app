const webpack = require('webpack');
const config = require('./webpack.config');

config.mode = 'production'; // Ensure production mode

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.error('❌ Webpack Build Error:', err);
    process.exit(1); // Exit with failure
  }

  console.log(stats.toString({ colors: true, modules: false, children: false }));
  console.log('✅ Build completed successfully!');
});
