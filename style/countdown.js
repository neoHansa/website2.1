function toRoman(num) {
	const romanMap = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I'],
	]
	let result = ''
	for (let [value, symbol] of romanMap) {
		while (num >= value) {
			result += symbol
			num -= value
		}
	}
	return result || 'N' // Return 'N' for zero (nulla in Roman).
}

// Countdown calculation
function updateCountdown() {
	const eventDate = new Date('2025-01-23T08:00:00') // Change to your event date
	const now = new Date()
	const diff = eventDate - now

	if (diff < 0) {
		document.getElementById('days').textContent = 'N'
		document.getElementById('hours').textContent = 'N'
		return
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24))
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

	document.getElementById('days').textContent = toRoman(days)
	document.getElementById('hours').textContent = toRoman(hours)
}

// Update every second
setInterval(updateCountdown, 1000)
updateCountdown() // Initial call
