import Counter from '@/components/Counter/Counter'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
	console.log('Server Component')

	return (
		<div>
			Home
			<div>
				<UserButton afterSignOutUrl='/' />
			</div>
			<Counter />
		</div>
	)
}
