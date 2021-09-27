// Importando plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');

const path = require('path');

module.exports = {
    // Ouput de la compilación
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    // Plugins que utilizaremos
    plugins: [
        // Instanciando plugin de HTML
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        }),
        // Instanciando plugin PWA
        new WebpackPwaManifestPlugin({
            name: 'Petgram - Tu App de fotos de mascotas',
            short_name: 'Pettgram 🐶',
            description: 'Con Petgram puedes encontrar y subir fotos de animales domésticos.',
            background_color: '#FFF',
            theme_color: '#b1a',
            icons: [{
                src: path.resolve('src/assets/icon.png'),
                sizes: [96, 128, 192, 256, 384, 512]
            }]
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