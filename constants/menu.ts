import collectionsIcon from '/assets/icons/collections.svg'
import communitiesIcon from '/assets/icons/communities.svg'
import homeIcon from '/assets/icons/home.svg'
import jobsIcon from '/assets/icons/jobs.svg'
import questionsIcon from '/assets/icons/questions.svg'
import tagsIcon from '/assets/icons/tags.svg'

export interface SidebarLink {
	imgURL: string
	route: string
	label: string
}

export const sidebarLinks: SidebarLink[] = [
	{
		imgURL: homeIcon,
		route: '/',
		label: 'Home',
	},
	{
		imgURL: communitiesIcon,
		route: '/community',
		label: 'Community',
	},
	{
		imgURL: collectionsIcon,
		route: '/collection',
		label: 'Collections',
	},
	{
		imgURL: jobsIcon,
		route: '/collection',
		label: 'Find Jobs',
	},
	{
		imgURL: tagsIcon,
		route: '/tags',
		label: 'Tags',
	},
	// {
	// 	imgURL: '/assets/icons/user.svg',
	// 	route: '/profile',
	// 	label: 'Profile',
	// },
	{
		imgURL: questionsIcon,
		route: '/ask-question',
		label: 'Ask a question',
	},
]
