import getSections from '../../modules/getSections.js';
let json;

export async function get () {
	if (!json || process.env.NODE_ENV !== 'production') {
		json = getSections();
	}

	return {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		},
		body: json
	};
}
