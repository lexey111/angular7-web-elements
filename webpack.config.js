const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.ts'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	target: 'web',
	devtool: isProduction ? false : 'source-map',
	resolve: {
		extensions: ['.ts', '.js', '.html']
	},
	module: {
		rules: [{
				test: /.js$/,
				parser: {
					system: true
				}
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [{
					loader: '@ngtools/webpack',
					options: {
						sourceMap: !isProduction
					}
				}]
			},
			{
				test: /\.html$/,
				exclude: /index.html$/i,
				use: [{
					loader: 'raw-loader'
				}]
			},
			{
				test: /index.html$/i,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}]
			},
			{
				test: /app\.less$/i,
				use: [{
						loader: 'file-loader',
						options: {
							name: 'assets/[name].css'
						}
					},
					{
						loader: 'less-loader',
					}
				]
			}
		]
	},

	plugins: [
		new NgCompilerPlugin.AngularCompilerPlugin({
			tsConfigPath: './tsconfig.json',
			mainPath: './src/index.ts'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/assets/images',
				to: './assets/images',
				toType: 'dir'
			},
			{
				from: './src/assets/shims',
				to: './assets',
				toType: 'dir'
			}
		])
	],
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		contentBase: path.resolve('./dist'),
		historyApiFallback: true,
		compress: true,
		port: 3000
	},
};