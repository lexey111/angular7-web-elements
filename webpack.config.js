const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, args) => {
	let isProduction = false;
	let ENV = 'development';

	if (args && args['mode'] === 'production') {
		isProduction = true;
		ENV = 'production';
		console.log('## Production mode');
	} else {
		console.log('## Development mode');
	}

	return {
		entry: {
			app: path.resolve(__dirname, './src/_app/index.tsx'),
			elements: path.resolve(__dirname, './src/angular-elements/index.ts'),
			polymer_elements: path.resolve(__dirname, './src/polymer-elements/index.ts'),
		},
		output: {
			path: path.resolve(__dirname, './dist'),
		},
		target: 'web',
		devtool: isProduction ? false : 'source-map',
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.txt'],
			mainFields: ['module', 'browser', 'main'],
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					react: {
						test: /[\\/]node_modules[\\/]\S*react/,
						name: 'scripts/react',
						enforce: true,
						chunks: 'all',
						priority: 1,
					},
					polymer: {
						//test: /[\\/]node_modules[\\/]@polymer/,
						test(module) {
							const context = module.context.replace(/\\/g, '/');
							if (context.indexOf('node_modules') === -1) {
								return false;
							}
							if (context.indexOf('node_modules/@polymer') !== -1) {
								return true;
							}
							return context.indexOf('node_modules/lit-html') !== -1;
						},

						name: 'scripts/polymer',
						chunks: 'all',
						enforce: true,
						priority: 2,
					},
					vendor: {
						//test: /[\\/]node_modules[\\/]/,
						test(module) {
							const context = module.context.replace(/\\/g, '/');
							if (context.indexOf('node_modules') === -1) {
								return false;
							}
							if (context.indexOf('node_modules/react') !== -1) {
								return false;
							}
							if (context.indexOf('node_modules/@polymer') !== -1) {
								return false;
							}
							return context.indexOf('node_modules/lit-html') === -1;
						},
						name: 'scripts/vendors',
						chunks: 'all',
						priority: -10,
					},
					default: {
						minChunks: 1,
						priority: -20,
						reuseExistingChunk: true
					}
				},
			},
		},

		module: {
			rules: [
				{
					test: /\.tsx$/,
					exclude: /node_modules/,
					use: [{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							silent: true
						},
					}],
				},
				{
					test: /\.ts$/,
					exclude: /(node_modules|angular-elements)/,
					use: [{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							silent: true
						},
					}],
				},
				// {
				// 	test: /.js$/,
				// 	parser: {
				// 		system: true
				// 	}
				// },
				{
					test: /\.js$/,
					// We need to transpile Polymer,so whitelist packages containing ES modules
					exclude: /node_modules\/(?!(lit-html|@polymer|angular|@angular)\/).*/,
					parser: {
						system: true
					},
					use: [{
						loader: 'babel-loader',
						options: {
							babelrc: true,
							extends: path.resolve(__dirname, '.babelrc.js'),
							cacheDirectory: true,
							envName: ENV
						}
					}]
				},
				{
					test: /\.ts$/,
					exclude: /(node_modules|polymer-elements)/,
					use: [{
						loader: '@ngtools/webpack',
						options: {
							sourceMap: !isProduction
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
				},
				{
					test: /rich-ui\.less$/i,
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
				mainPath: './src/angular-elements/index.ts'
			}),
			new CopyWebpackPlugin([
				// static files to the site root folder (index and robots)
				{
					from: './src/assets/static/**/*',
					to: path.resolve('./dist/'),
					toType: 'dir',
					flatten: true
				},
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
			]),
		],
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			contentBase: path.resolve('./dist'),
			historyApiFallback: true,
			compress: true,
			port: 3030
		},
	};
};