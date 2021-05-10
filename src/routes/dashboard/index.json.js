import comuni from './_comuni.js';

const contents = JSON.stringify(comuni.map(comune => {
	return {
		title: comune.title,
		slug: comune.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}