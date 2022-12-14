const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        pageLoad: './src/pages/page-load.js',
        headerLoad: './src/pages/header-load.js',
        contactLoad: './src/pages/contact-load.js',
        menuLoad: './src/pages/menu-load.js',
        createImage: './src/functions/create-image.js',
        tabSwitch: './src/functions/tab-switch',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Restaurant Page',
        }),
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

};