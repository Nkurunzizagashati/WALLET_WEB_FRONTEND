/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-gray': '#F7F7F7',
				dark: '#2C2C2C',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
				'custom-dark': '0 6px 12px rgba(0, 0, 0, 0.4)',
			},
		},
	},
	plugins: [],
};
