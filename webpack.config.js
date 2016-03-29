const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        common: './public/javascripts/reactjs/src/common.jsx',
        editor: './public/javascripts/reactjs/src/editor.jsx',
        login: './public/javascripts/reactjs/src/login.jsx',
        signup: './public/javascripts/reactjs/src/signup.jsx',
        forget: './public/javascripts/reactjs/src/forget.jsx',
        emailValidation: './public/javascripts/reactjs/src/email-validation.jsx',
        resetPasswordBox: './public/javascripts/reactjs/src/reset-password-box.jsx'
    },
    output: {
        path: __dirname + '/public/javascripts/reactjs/build',
        /* [name] is the key in entry, will generate index-bundle.js  */
        filename: '[name]-bundle.js',
        publicPath: '/javascripts/reactjs/build/',
        libraryTarget: "var",
        /*will export the  global variable ReactComponents['index'] */
        library: ["ReactComponents", "[name]"]  
    },
    externals: {
        "ckeditor": "CKEDITOR"
    },
    watch: true,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: { presets:['react'] }
            },{
                test: /\.css$/,
                loaders: ["style", "css"] 
            }
        ]
    }
}