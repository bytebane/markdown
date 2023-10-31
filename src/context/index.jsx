/* eslint-disable react-refresh/only-export-components */
import { useContext } from 'react'
import { AppContext, AppContextProvider } from './AppContext'
import { ThemeContext, ThemeContextProvider } from './ThemeContext'

export default function MyContextProvider({ children }) {
	return (
		<AppContextProvider>
			<ThemeContextProvider>{children}</ThemeContextProvider>
		</AppContextProvider>
	)
}

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error('useAppContext must be used within a AppContextProvider')
	}
	return context
}

export const useThemeContext = () => {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useThemeContext must be used within a ThemeContextProvider')
	}
	return context
}
