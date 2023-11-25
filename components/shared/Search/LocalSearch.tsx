'use client'

import { Input } from '@/components/ui/input'

interface LocalSearchProps {
	route: string
	iconPosition: 'left' | 'right'
	icon: JSX.Element
	placeholder: string
	otherClasses: string
}

export default function LocalSearch(props: LocalSearchProps) {
	const { route, iconPosition, icon, placeholder, otherClasses } = props
	return (
		<div
			className={`background-light800_darkgradient flex min-h-[56px]
			grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
		>
			{iconPosition === 'left' && icon}

			<Input
				type='text'
				placeholder={placeholder}
				value={''}
				onChange={() => {}}
				className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
			/>

			{iconPosition === 'right' && icon}
		</div>
	)
}
