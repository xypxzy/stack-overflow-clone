'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

type filterTypes = {
	name: string
	value: string
}

interface FilterProps {
	filters: Array<filterTypes>
	otherClasses?: string
	containerClasses?: string
}

export default function Filter(props: FilterProps) {
	const { filters, otherClasses, containerClasses } = props

	console.log(filters)

	return (
		<div className={`relative ${containerClasses}`}>
			<Select>
				<SelectTrigger
					className={`${otherClasses} body-regular light-border 
					background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
				>
					<div className='line-clamp-1 flex-1 text-left'>
						<SelectValue placeholder='Select a Filter' />
					</div>
				</SelectTrigger>
				<SelectContent>
					{filters.map(filter => (
						<SelectItem key={filter.value} value={filter.value}>
							{filter.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
