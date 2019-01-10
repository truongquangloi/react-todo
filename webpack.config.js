const path = require('path');
module.exports = {
    entry: './src/app.js', // File input
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public') // Đuòng dẫn tuyệt đối.
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: '/\.js/',
                exclude: /node_modules/,
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]        
    }
}