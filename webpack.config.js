const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/jujuspritecomponent.tsx'),
    externals: {
        'react': 'react', // Case matters here 
        'react-dom' : 'reactDOM' // Case matters here 
    },
    output: {
        filename: 'jujuspritecomponent.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};