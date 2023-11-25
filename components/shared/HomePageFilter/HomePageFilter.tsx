'use client'

import { Button } from '@/components/ui/button'
import { HomePageFilters as filters } from '@/constants/filters'

export default function HomePageFilter() {
	const active = 'newest'

	return (
		<div className='mt-10 hidden flex-wrap gap-3 md:flex'>
			{filters.map(filter => (
				<Button
					key={filter.value}
					onClick={() => {}}
					className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
						active === filter.value
							? 'bg-primary-100 text-primary-500'
							: 'bg-light-800 text-light-500 hover:bg-light-850 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300'
					}`}
				>
					{filter.name}
				</Button>
			))}
		</div>
	)
}
