import { Input } from '@/components/ui/input'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
	return (
		<div className='relative w-full max-w-[600px] max-lg:hidden'>
			<div
				className='background-light800_darkgradient relative flex min-h-[56px]
			grow items-center gap-1 rounded-xl px-4'
			>
				<SearchIcon
					width={24}
					height={24}
					className='cursor-pointer dark:invert-[0.3]'
				/>
				<Input
					type='text'
					placeholder='Search globally'
					className='paragraph-regular no-focus placeholder
					background-light800_darkgradient border-none shadow-none outline-none'
				/>
			</div>
		</div>
	)
}
