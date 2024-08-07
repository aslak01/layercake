/**
	A simple debounce function taken from here https://www.freecodecamp.org/news/javascript-debounce-example/
	@param {Function} func The function to debounce.
	@param {number} [timeout=300] The time in ms to wait.
	@returns {Function}
*/
export default function debounce(func, timeout = 300) {
	/** @type {undefined|NodeJS.Timeout} */
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, timeout);
	};
}
