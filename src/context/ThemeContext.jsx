import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [themeColorId, setThemeColorId] = useState(0)

	const toggleThemeColor = () => {
		setThemeColorId(parseInt(event.target.value))
		localStorage.setItem('themeColorId', parseInt(event.target.value))
	}

	const value = {
		themeColorId,
		toggleThemeColor,
	}

	useEffect(() => {
		if (localStorage.getItem('themeColorId')) {
			setThemeColorId(parseInt(localStorage.getItem('themeColorId')))
		}
	}, [])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
