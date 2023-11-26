import { z } from 'zod'

export const questionsSchema = z.object({
	title: z
		.string()
		.min(5, {
			message: 'Title must be at least 5 characters.',
		})
		.max(130, {
			message: 'Title must not exceed 130 characters.',
		}),
	explanation: z.string().min(100, {
		message: 'Explanation must be at least 100 characters.',
	}),
	tags: z
		.array(
			z
				.string()
				.min(1, {
					message: 'Tags must be at least 1 characters.',
				})
				.max(15, {
					message: 'Tags must not exceed 15 characters.',
				})
		)
		.min(1, {
			message: 'Tags must be at least 1 tags.',
		})
		.max(3, {
			message: 'Tags must not exceed 3 tags.',
		}),
})
