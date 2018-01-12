const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        entry: {
            app: __dirname + "/dev/social.js"

        },
        output: {
            path: path.join(__dirname, "prod"),
            filename: "social.js",
            publicPath: "/Share/prod/"
        },
        resolve: {
            extensions: ['.js']
        },
        watch: true,
        devtool: false,
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    use: [
                        'babel-loader',
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'less-loader']
                    })
                },
                {
                    test: /\.svg/,
                    loader: 'url-loader',
                    query: {
                        limit: 1000,
                        mimetype: 'image/svg+xml',
                        name: 'img/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            new ExtractTextPlugin('style.css'),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            // new webpack.optimize.UglifyJsPlugin({
            //     beautify: false,
            //     comments: false,
            //     compress: {
            //         sequences     : true,
            //         booleans      : true,
            //         loops         : true,
            //         unused      : true,
            //         warnings    : false,
            //         drop_console: true,
            //         unsafe      : true
            //     }
            // }),
            new webpack.optimize.OccurrenceOrderPlugin()
        ]
    }
];