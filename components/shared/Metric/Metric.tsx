import Image from 'next/image'
import Link from 'next/link'

interface MetricProps {
	icon: string | JSX.Element
	value: number | string
	title: string
	textStyles?: string
	href?: string
	isAuthor?: boolean
}

export default function Metric(props: MetricProps) {
	const { icon, value, title, textStyles, href, isAuthor } = props

	const metricContent = (
		<>
			{typeof icon === 'string' ? (
				<Image
					src={icon}
					alt='avatar'
					width={16}
					height={16}
					className='rounded-full object-contain'
				/>
			) : (
				icon
			)}
			<p className={`${textStyles} flex items-center gap-1`}>
				{value}

				<span
					className={`small-regular line-clamp-1 ${
						isAuthor ? 'max-sm:hidden' : ''
					}`}
				></span>

				{title}
			</p>
		</>
	)

	if (href) {
		return (
			<Link href={href} className='flex-center gap-1'>
				{metricContent}
			</Link>
		)
	}

	return <div className='flex-center flex-wrap gap-1'>{metricContent}</div>
}
