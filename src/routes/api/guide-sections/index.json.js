import getSections from '../../../_modules/getSections.js';

let json;
export async function get () {
	if (!json || process.env.NODE_ENV !== 'production') {
		json = getSections(false);
	}

	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: json
	};
}
