// Importando plugin HTML
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Ouput de la compilación
    output: {
        filename: 'app.bundle.js'
    },
    // Plugins que utilizaremos
    plugins: [
        // Instanciando plugin de HTML
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        // Reglas
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: { extensions: ['.js', '.jsx', '.json'] }
};