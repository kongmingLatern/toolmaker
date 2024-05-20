export function setupCounter(element: HTMLButtonElement): void {
	let count = 0
	element.addEventListener('click', () => {
		element.textContent = `count: ${++count}`
	})
}
