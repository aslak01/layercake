import { error } from '@sveltejs/kit';

export const prerender = true
export async function load({ fetch }) {
	const res = await fetch(`/api/guide-sections.json`);
	const sections = await res.json();

	if (res.status === 200) {
		return {sections};
	} else {
		throw error(500, `Could not load guide sections: ${sections.message}`);
	}
}
