import { Box, CssBaseline, CssVarsProvider, Link, Sheet, Typography } from '@mui/joy'

import { themesList } from './theme'
import { useThemeContext } from './context/'
import { AppIcon48 } from './assets/'
import { RawInput, SanitizedMD, Settings } from './components'
import AnimatedCursor from 'react-animated-cursor'

function App() {
	const { themeColorId } = useThemeContext()
	const theme = themesList[themeColorId]

	return (
		<CssVarsProvider defaultMode='dark' theme={theme} disableNestedContext>
			<CssBaseline />

			<AnimatedCursor innerSize={8} outerSize={35} innerScale={0.7} outerScale={1.5} innerStyle={{ zIndex: 99999, backgroundColor: theme.palette.primary.softBg }} outerStyle={{ zIndex: 99999, backgroundColor: 'transparent', border: `3px solid ${theme.palette.primary.softHoverBg}`, mixBlendMode: 'difference' }} clickables={['a', 'img', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="password"]', 'input[type="submit"]', 'input[type="image"]', 'label', 'select', 'textarea', 'button', '.link', '.custom']} />

			<Sheet component={'main'} sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 1, overflow: 'hidden' }}>
				<Link color='primary' href='/' underline='none'>
					<img src={AppIcon48} alt='App Icon' style={{ marginRight: 8 }} />
					<Typography component={'h1'} level='h1'>
						Markdown Editor
					</Typography>
				</Link>
				<Box sx={{ display: { xs: 'grid', md: 'flex' }, gridTemplateColumns: { xs: '1fr' }, gridTemplateRows: { xs: '1fr 1fr' }, justifyContent: 'center', alignItems: 'center', gap: 2, p: 2, overflow: 'hidden', position: 'relative', height: '100%', width: '100%' }}>
					<RawInput />
					<SanitizedMD />
				</Box>
				<Settings />
			</Sheet>
		</CssVarsProvider>
	)
}

export default App
