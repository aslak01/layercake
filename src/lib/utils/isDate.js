/** @type {(maybeDate: unknown) => maybeDate is Date} */
export default function isDate(maybeDate) {
	return Object.prototype.toString.call(maybeDate) !== '[object Date]';
}
