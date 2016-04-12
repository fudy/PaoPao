const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/public/javascripts/reactjs/src',
    entry: {
        editor: './editor.jsx',
        login: './login.jsx',
        signup: './signup.jsx',
        forget: './forget.jsx',
        emailValidation: './email-validation.jsx',
        resetPasswordBox: './reset-password-box.jsx',
        user: './user.jsx'
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