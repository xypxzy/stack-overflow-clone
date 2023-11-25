export const getTimestamp = (createdAt: Date): string => {
	const currentTime = new Date()
	const difference = currentTime.getTime() - createdAt.getTime()

	const minute = 60 * 1000
	const hour = 60 * minute
	const day = 24 * hour
	const week = 7 * day
	const month = 30 * day
	const year = 365 * day

	if (difference < minute) {
		const seconds = Math.floor(difference / 1000)
		return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`
	} else if (difference < hour) {
		const minutes = Math.floor(difference / hour)
		return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
	} else if (difference < day) {
		const hours = Math.floor(difference / day)
		return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
	} else if (difference < month) {
		const weeks = Math.floor(difference / week)
		return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
	} else if (difference < year) {
		const months = Math.floor(difference / month)
		return `${months} ${months === 1 ? 'month' : 'months'} ago`
	} else {
		const years = Math.floor(difference / year)
		return `${years} ${years === 1 ? 'year' : 'years'} ago`
	}
}
