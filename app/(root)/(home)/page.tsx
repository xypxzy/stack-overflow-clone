import QuestionCard from '@/components/cards/QuestionCard/QuestionCard'
import Filter from '@/components/shared/Filter/Filter'
import HomePageFilter from '@/components/shared/HomePageFilter/HomePageFilter'
import NoResults from '@/components/shared/NoResults/NoResults'
import LocalSearch from '@/components/shared/Search/LocalSearch'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters'
import { getQuestions } from '@/lib/actions/question.action'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
	const result = await getQuestions({})

	console.log(result)

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
				{result?.questions.length ? (
					result.questions.map(question => (
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
