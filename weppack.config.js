const path = require('path');

module.exports = {

    entry: path.join(__dirname, 'src', 'app.js'),

    output : {

        path: path.resolve(__dirname, 'dist'),

        filename: 'app.bundle.js',

        publicPath: '/'
    
    },

    mode: process.env.NODE_ENV || 'development',
    
    module: {

        rules: [{

            test: /\.(js|jsx)$/,
            
            exclude : /node_modules/,

            use : ['babel-loader']
        }]
    }
};