import { IUser } from '@/database/user.model'
import { Schema } from 'mongoose'

// Question props
export interface GetQuestionsParams {
	page?: number
	pageSize?: number
	searchQuery?: string
	filter?: string
}
export interface CreateQuestionsParams {
	title: string
	content: string
	tags: string[]
	author: Schema.Types.ObjectId | IUser
	path: string
}

// User props
export interface CreateUserParams {
	clerkId: string
	name: string
	username: string
	email: string
	picture: string
}

export interface UpdateUserParams {
	clerkId: string
	updateData: Partial<IUser>
	path: string
}

export interface DeleteUserParams {
	clerkId: string
}

export interface GetAllUsersParams {
	page?: number
	pageSize?: number
	filter?: string
	searchQuery?: string
}

export interface GetTopInteractedTagsParams {
	userId: string
	limit?: number
}
