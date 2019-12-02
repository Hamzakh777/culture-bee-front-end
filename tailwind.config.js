module.exports = {
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			'din-condensed': ['din-condensed', 'sans-serif']
		},
		colors: {
			black: '#000000',
			blue: '#2C3258',
			gray: {
				'700': '#474350',
				'800': '#393E41',
				'900': '#221F20'
			},
			purple: '#474350',
			yellow: '#FED006',
			'yellow-hover': '#E2B800',
			white: '#ffffff'
		},
		gradients: theme => ({
			'gray-to-black': [
				'to bottom',
				theme('colors.gray.800'),
				theme('colors.black')
			]
		}),
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px'
		},
		extend: {
			borderWidth: {
				'3': '3px'
			},
			fontSize: {
				xxs: '0.625rem',
				'2-1/4': '0.6875rem',
				'3-3/4': '0.9375rem',
				'4-1/4': '1.0625rem',
				'4-3/4': '1.375rem',
				'7-1/3': '1.8125rem',
				'8': '2rem',
				'13': '3.25rem'
			},
			height: {
				'100-vh': '100vh'
			},
			inset: {
				'1/2': '50%'
			},
			spacing: {
				'1/2': '0.125rem',
				'1-1/2': '0.375rem',
				'1-1/4': '0.3125rem',
				'1-3/4': '0.4375rem',
				'2-1/2': '0.625rem',
				'3-1/2': '0.875rem',
				'4-1/2': '1.125rem',
				'4-1/4': '1.0625rem',
				'5-1/2': '1.375rem',
				'7': '1.75rem',
				'7-1/2': '1.875rem',
				'9': '2.25rem',
				'10': '2.5rem',
				'11-1/4': '2.8125rem',
				'11-1/2': '2.875rem',
				'13': '3.25rem',
				'14': '3.5rem',
				'12-1/2': '3.125rem',
				'16': '4rem',
				'17': '4.25rem',
				'18': '4.5rem',
				'25': '6.25rem',
				'26': '6.75rem',
				'27-1/2': '6.875rem',
				'42': '10.5rem',
				'45': '11.25rem',
				'47-1/2': '11.875rem',
				'50': '12.5rem',
				'54': '13.5rem',
				'60': '15rem',
				'68': '16.375rem',
				'71-1/4': '17.8125rem',
				'71-1/2': '17.875rem',
				'72': '18rem',
				'80': '20rem',
				'84': '21rem',
				'90': '22.5rem',
				'94': '23.5rem',
				'105': '26.25rem',
				'118': '29.5rem',
				'138': '34.5rem',
				'140': '35rem',
				'168': '42rem',
				'184': '46rem'
			},
			width: {
				'31-%': '31%'
			},
			zIndex: {
				'1': '1'
			}
		}
	},
	variants: {},
	plugins: [
		function({ addUtilities }) {
			const newUtilities = {
				'.transform-center': {
					transform: 'translate(-50%, -50%);'
				},
				'.-transform-y-50': {
					transform: 'translateY(-50%)'
				},
				'.-transform-x-50': {
					transform: 'translateX(-50%)'
				},
				'.transform-y-50': {
					transform: 'translateY(50%)'
				},
				'.transform-x-50': {
					transform: 'translateX(50%)'
				},
			};
			addUtilities(newUtilities);
		},
    require('./node_modules/tailwindcss-plugins/gradients/index.js')
	]
};
