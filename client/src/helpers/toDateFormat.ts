export const toDateFormat = (timestamp: number) => {
	const messageDate = new Date(timestamp)

	const hours = messageDate.getHours()
	const minutes = messageDate.getMinutes()

	// ensure that the minutes are always displayed as two digits

	const formattedHours = hours.toString().padStart(2, '0')
	const formattedMinutes = minutes.toString().padStart(2, '0')

	return `${formattedHours}:${formattedMinutes}`
}
