const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/jujuspritecomponent.tsx'),
    output: {
        filename: 'jujuspritecomponent.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'JujuSpriteComponent',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.scss?$/,
                loaders: [
                    "style-loader", 
                    "typings-for-css-modules-loader?modules&sass&namedExport&camelCase", 
                    "sass-loader"
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss"]
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};