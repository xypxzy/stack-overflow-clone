import Counter from '@/components/Counter/Counter'

export default function Home() {
	console.log('Server Component')

	return (
		<div>
			Home
			<Counter />
		</div>
	)
}
