import Question from '@/components/forms/Question/Question'
import { getUserById } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation'

export default async function page() {
	// const { userId } = auth()
	const userId = '123456789'
	if (!userId) redirect('/sign-in')

	const mongoUser = await getUserById({ userId })

	console.log(mongoUser)

	return (
		<div>
			<h1 className='h1-bold text-dark100_light900 '>Ask a Question</h1>
			<div className='mt-9'>
				<Question mongoUserId={JSON.stringify(mongoUser._id)} />
			</div>
		</div>
	)
}
