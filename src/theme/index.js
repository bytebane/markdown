import { extendTheme } from '@mui/joy'

const commonStyles = {
	fontFamily: {
		display: 'Playpen sans', // applies to `h1`–`h4`
		body: 'Playpen sans', // applies to `title-*` and `body-*`
	},
	typography: {
		h1: {
			background: 'linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))',
			// `Webkit*` properties must come later.
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
		},
	},
}
const amberScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#fff8e1',
					100: '#ffecb3',
					200: '#ffe082',
					300: '#ffd54f',
					400: '#ffca28',
					500: '#ffc107',
					600: '#ffb300',
					700: '#ffa000',
					800: '#ff8f00',
					900: '#ff6f00',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#fff8e1',
					100: '#ffecb3',
					200: '#ffe082',
					300: '#ffd54f',
					400: '#ffca28',
					500: '#ffc107',
					600: '#ffb300',
					700: '#ffa000',
					800: '#ff8f00',
					900: '#ff6f00',
				},
			},
		},
	},
	...commonStyles,
})

// const blueScheme = extendTheme({
// 	colorSchemes: {
// 		light: {
// 			palette: {
// 				primary: {
// 					50: '#e3f2fd',
// 					100: '#bbdefb',
// 					200: '#90caf9',
// 					300: '#64b5f6',
// 					400: '#42a5f5',
// 					500: '#2196f3',
// 					600: '#1e88e5',
// 					700: '#1976d2',
// 					800: '#1565c0',
// 					900: '#0d47a1',
// 				},
// 			},
// 		},
// 		dark: {
// 			palette: {
// 				primary: {
// 					50: '#e3f2fd',
// 					100: '#bbdefb',
// 					200: '#90caf9',
// 					300: '#64b5f6',
// 					400: '#42a5f5',
// 					500: '#2196f3',
// 					600: '#1e88e5',
// 					700: '#1976d2',
// 					800: '#1565c0',
// 					900: '#0d47a1',
// 				},
// 			},
// 		},
// 	},
// })

const cyanScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#e0f7fa',
					100: '#b2ebf2',
					200: '#80deea',
					300: '#4dd0e1',
					400: '#26c6da',
					500: '#00bcd4',
					600: '#00acc1',
					700: '#0097a7',
					800: '#00838f',
					900: '#006064',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#e0f7fa',
					100: '#b2ebf2',
					200: '#80deea',
					300: '#4dd0e1',
					400: '#26c6da',
					500: '#00bcd4',
					600: '#00acc1',
					700: '#0097a7',
					800: '#00838f',
					900: '#006064',
				},
			},
		},
	},
	...commonStyles,
})

const dOrangeScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#fbe9e7',
					100: '#ffccbc',
					200: '#ffab91',
					300: '#ff8a65',
					400: '#ff7043',
					500: '#ff5722',
					600: '#f4511e',
					700: '#e64a19',
					800: '#d84315',
					900: '#bf360c',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#fbe9e7',
					100: '#ffccbc',
					200: '#ffab91',
					300: '#ff8a65',
					400: '#ff7043',
					500: '#ff5722',
					600: '#f4511e',
					700: '#e64a19',
					800: '#d84315',
					900: '#bf360c',
				},
			},
		},
	},
	...commonStyles,
})

const dPurpleScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#ede7f6',
					100: '#d1c4e9',
					200: '#b39ddb',
					300: '#9575cd',
					400: '#7e57c2',
					500: '#673ab7',
					600: '#5e35b1',
					700: '#512da8',
					800: '#4527a0',
					900: '#311b92',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#ede7f6',
					100: '#d1c4e9',
					200: '#b39ddb',
					300: '#9575cd',
					400: '#7e57c2',
					500: '#673ab7',
					600: '#5e35b1',
					700: '#512da8',
					800: '#4527a0',
					900: '#311b92',
				},
			},
		},
	},
	...commonStyles,
})

const greenScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
			},
		},
	},
	...commonStyles,
})

const pinkScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
			},
		},
	},
	...commonStyles,
})

const purpleScheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				},
			},
		},
	},
	...commonStyles,
})

export const themesList = [amberScheme, cyanScheme, dOrangeScheme, dPurpleScheme, greenScheme, pinkScheme, purpleScheme]
