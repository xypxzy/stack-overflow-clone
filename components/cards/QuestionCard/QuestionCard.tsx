import Metric from '@/components/shared/Metric/Metric'
import RenderTags from '@/components/shared/RenderTags/RenderTags'
import { formatNumber } from '@/lib/formatNumber'
import { getTimestamp } from '@/lib/getTimestamp'
import { Eye, MessageCircle, ThumbsUp, User2 } from 'lucide-react'
import Link from 'next/link'

type TagType = {
	_id: string
	name: string
}

interface AuthorType extends TagType {
	picture: string
}

interface QuestionCardProps {
	_id: string
	title: string
	tags: TagType[]
	author: AuthorType
	upvotes: number
	views: number
	answers: number
	createdAt: Date
}

export default function QuestionCard(props: QuestionCardProps) {
	const { title, tags, author, upvotes, views, answers, createdAt, _id } = props

	return (
		<div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
			<div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
				<div>
					<span className='subtle-regular text-dark400_light700 line-clamp-1 sm:hidden'>
						{getTimestamp(createdAt)}
					</span>
					<Link href={`/question/${_id}}`}>
						<h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>
							{title}
						</h3>
					</Link>
				</div>
			</div>
			<div className='mt-3.5 flex flex-wrap gap-2'>
				{tags.map(tag => (
					<RenderTags key={tag._id} _id={tag._id} name={tag.name} />
				))}
			</div>

			<div className='flex-between mt-6 w-full flex-wrap gap-3'>
				<Metric
					icon={
						<User2
							width={16}
							height={16}
							className='rounded-full object-contain'
						/>
					}
					value={author.name}
					title={` - asked ${getTimestamp(createdAt)}`}
					href={`/profile/${author._id}`}
					isAuthor
					textStyles='body-medium text-dark400_light700'
				/>
				<Metric
					icon={<ThumbsUp width={16} height={16} className='object-contain' />}
					value={formatNumber(upvotes)}
					title=' Votes'
					textStyles='small-medium text-dark400_light800'
				/>
				<Metric
					icon={
						<MessageCircle width={16} height={16} className='object-contain' />
					}
					value={answers}
					title=' Answers'
					textStyles='small-medium text-dark400_light800'
				/>
				<Metric
					icon={<Eye width={16} height={16} className='object-contain' />}
					value={views}
					title=' Views'
					textStyles='small-medium text-dark400_light800'
				/>
			</div>
		</div>
	)
}
