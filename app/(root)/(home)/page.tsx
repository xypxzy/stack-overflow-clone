import Counter from '@/components/Counter/Counter'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
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
