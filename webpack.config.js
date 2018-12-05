const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, args) => {
	let isProduction = false;

	if (args && args['mode'] === 'production') {
		isProduction = true;
		console.log('== Production mode');
	} else {
		console.log('== Development mode');
	}
	const config = {
		entry: {
			app: path.resolve(__dirname, './src/app/index.tsx'),
			elements: path.resolve(__dirname, './src/elements/index.ts'),
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
						chunks: 'initial',
						priority: 1,
					},
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'scripts/vendors',
						chunks: 'initial',
						priority: -1,
					},
				},
			},
		},

		module: {
			rules: [{
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
				mainPath: './src/elements/index.ts'
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

	return config;
};