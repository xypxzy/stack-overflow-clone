'use client'

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '@/components/ui/menubar'
import { themes } from '@/constants/theme'
import { useTheme } from '@/context/ThemeProvider'
import moonIcons from 'assets/icons/moon.svg'
import sunIcons from 'assets/icons/sun.svg'
import Image from 'next/image'

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	return (
		<Menubar className='relative border-none bg-transparent shadow-none'>
			<MenubarMenu>
				<MenubarTrigger
					className='focus:bg-light-900 data-[state=open]:bg-light-900
				dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'
				>
					{theme === 'light' ? (
						<Image
							src={sunIcons}
							alt={'theme icon'}
							width={32}
							height={32}
							className='active-theme'
						/>
					) : (
						<Image
							src={moonIcons}
							alt={'theme icon'}
							width={32}
							height={32}
							className='active-theme'
						/>
					)}
				</MenubarTrigger>
				<MenubarContent
					className='absolute right-[-3rem] mt-3 min-w-[120px]
				rounded border py-2 dark:border-dark-400 dark:bg-dark-300'
				>
					{themes.map(item => (
						<MenubarItem
							key={item.value}
							className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
							onClick={() => {
								setTheme(item.value)

								if (item.value !== 'system') {
									localStorage.theme = item.value
								} else {
									localStorage.removeItem('theme')
								}
							}}
						>
							<Image
								src={item.icon}
								alt={item.value}
								width={24}
								height={24}
								className={`${theme === item.value && 'active-theme'}`}
							/>
							<p
								className={`body-semibold text-light-500 ${
									theme === item.value
										? 'text-primary-500'
										: 'text-dark100_light900'
								}`}
							>
								{item.label}
							</p>
						</MenubarItem>
					))}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}
