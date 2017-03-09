module.exports = {
    entry: './src/index.js',
    output: {
        filename: './public/bundle.js'
    },
    devServer: {
        contentBase: __dirname + "/src",
    },

    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/,
            },
        ]
    }
};
