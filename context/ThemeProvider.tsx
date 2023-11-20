'use client'

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'

interface IThemeContext {
	mode: string
	setMode: (mode: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [mode, setMode] = useState('')

	const handleThemeChange = () => {
		if (mode === 'dark') {
			setMode('light')
			document.documentElement.classList.add('light')
		} else {
			setMode('dark')
			document.documentElement.classList.add('dark')
		}
	}

	useEffect(() => {
		handleThemeChange()
	}, [mode])

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}

	return context
}