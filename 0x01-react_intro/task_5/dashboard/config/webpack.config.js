const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js', // Output bundle
    clean: true, // Clean old files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JavaScript/React files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Process images
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Support .js and .jsx extensions
  },
  devtool: 'inline-source-map', // Enable source maps
  devServer: {
    static: path.resolve(__dirname, '../dist'), // Serve files from dist
    port: 3000, // Development server port
    hot: true, // Enable hot reloading
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Use the HTML template
    }),
  ],
};

