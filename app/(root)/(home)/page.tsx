import QuestionCard from '@/components/cards/QuestionCard/QuestionCard'
import Filter from '@/components/shared/Filter/Filter'
import HomePageFilter from '@/components/shared/HomePageFilter/HomePageFilter'
import NoResults from '@/components/shared/NoResults/NoResults'
import LocalSearch from '@/components/shared/Search/LocalSearch'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

const questions = [
	{
		_id: '1',
		title:
			'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this',
		tags: [
			{ _id: '1', name: 'javascript' },
			{ _id: '2', name: 'react' },
			{ _id: '3', name: 'salesforce' },
			{ _id: '4', name: 'invalid fields' },
		],
		author: {
			_id: '1',
			name: 'John Doe',
			picture: 'das',
		},
		upvotes: 1102,
		views: 100,
		answers: 2,
		createdAt: new Date('2023-09-21T00:00:00Z'),
	},
	{
		_id: '2',
		title: 'How to center a div?',
		tags: [
			{ _id: '1', name: 'javascript' },
			{ _id: '2', name: 'css' },
		],
		author: {
			_id: '1',
			name: 'John Doe',
			picture: 'das',
		},
		upvotes: 10,
		views: 100,
		answers: 2,
		createdAt: new Date('2021-09-01T12:00:000Z'),
	},
	{
		_id: '3',
		title: 'How to optimize React component rendering?',
		tags: [
			{ _id: '2', name: 'react' },
			{ _id: '5', name: 'performance' },
			{ _id: '3', name: 'optimization' },
		],
		author: {
			_id: '2',
			name: 'Jane Smith',
			picture: 'xyz',
		},
		upvotes: 25,
		views: 150,
		answers: 5,
		createdAt: new Date('2021-09-10T08:30:000Z'),
	},
	{
		_id: '4',
		title: 'Troubleshooting CSS Flexbox issues in Safari',
		tags: [
			{ _id: '2', name: 'css' },
			{ _id: '7', name: 'flexbox' },
			{ _id: '8', name: 'safari' },
		],
		author: {
			_id: '3',
			name: 'Emily Johnson',
			picture: 'abc',
		},
		upvotes: 15,
		views: 80,
		answers: 3,
		createdAt: new Date('2021-09-15T15:45:000Z'),
	},
	{
		_id: '5',
		title: 'Best practices for handling state in React Hooks',
		tags: [
			{ _id: '2', name: 'react' },
			{ _id: '9', name: 'state management' },
			{ _id: '10', name: 'hooks' },
		],
		author: {
			_id: '4',
			name: 'Alex Wilson',
			picture: 'pqr',
		},
		upvotes: 30,
		views: 200,
		answers: 8,
		createdAt: new Date('2021-09-20T11:20:000Z'),
	},
]

export default function Home() {
	return (
		<>
			<div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
				<h1 className='h1-bold text-dark100_light900'>All Questions</h1>
				<Link href={'/ask-question'} className='flex justify-end max-sm:w-full'>
					<Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
						Ask a Question
					</Button>
				</Link>
			</div>
			<div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
				<LocalSearch
					route='/'
					iconPosition='left'
					icon={
						<SearchIcon
							width={24}
							height={24}
							className='cursor-pointer dark:invert-[0.3]'
						/>
					}
					placeholder='Search for questions'
					otherClasses='flex-1'
				/>
				<Filter
					filters={HomePageFilters}
					otherClasses='min-h-[56px] sm:min-w-[170px]'
					containerClasses='hidden max-md:flex'
				/>
			</div>
			<HomePageFilter />

			<div className='mt-10 flex w-full flex-col gap-6'>
				{questions.length ? (
					questions.map(question => (
						<QuestionCard
							key={question._id}
							_id={question._id}
							title={question.title}
							tags={question.tags}
							author={question.author}
							upvotes={question.upvotes}
							views={question.views}
							answers={question.answers}
							createdAt={question.createdAt}
						/>
					))
				) : (
					<NoResults
						title='There’s no question to show'
						description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
						discussion. our query could be the next big thing others learn from. Get
						involved! 💡'
						linkTitle='Ask a Question'
						link='/ask-question'
					/>
				)}
			</div>
		</>
	)
}
