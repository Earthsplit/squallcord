/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#1a222c',
				grayLight: '#24303f',
				grayDark: '#0d1117',
			},
		},
	},
	plugins: [],
}
