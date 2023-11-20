'use client'

import {
	ReactNode,
	createContext,
	useContext,
	useLayoutEffect,
	useState,
} from 'react'

interface IThemeContext {
	theme: string
	toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const initialTheme = () => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') || 'light'
		}

		return 'light'
	}
	const [theme, setTheme] = useState(initialTheme)

	const toggleTheme = () =>
		setTheme(theme => (theme === 'light' ? 'dark' : 'light'))

	useLayoutEffect(() => {
		localStorage.setItem('theme', theme)
		if (theme === 'light') {
			document.documentElement.classList.remove('dark-mode')
			document.documentElement.classList.add('light-mode')
		} else {
			document.documentElement.classList.remove('light-mode')
			document.documentElement.classList.add('dark-mode')
		}
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

const useTheme = () => {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

export { ThemeProvider, useTheme }
