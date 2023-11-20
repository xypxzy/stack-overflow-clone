'use client'

import { useState } from 'react'

export default function Counter() {
	const [counter, setCounter] = useState(0)
	console.log('Client Component')

	return (
		<div className='flex flex-col'>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
			<button onClick={() => setCounter(counter - 1)}>Decrement</button>
		</div>
	)
}
