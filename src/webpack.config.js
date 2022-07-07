const path = require('path');

module.exports = (env, argv) => ({

    context: path.join(process.cwd(), 'src'),
  
    output: {
      publicPath: (argv || {}).mode === 'production' ? '/portfolio-react' : '/',
      path: path.join(process.cwd(), 'dist'),
      filename: 'scripts/[name].[hash].js',
    },
})