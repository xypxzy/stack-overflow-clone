'use client'

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'

interface IThemeContext {
	theme: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState('')

	const handleThemeChange = () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setTheme('dark')
			document.documentElement.classList.add('dark')
		} else {
			setTheme('light')
			document.documentElement.classList.remove('dark')
		}
	}

	useEffect(() => {
		handleThemeChange()
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
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
