import type { APIRoute } from 'astro';
import { daysData } from '../utils/i18n';

const siteUrl = 'https://icetrip.eu';

export const GET: APIRoute = () => {
	const paths = [
		'/pl/',
		'/en/',
		'/pl/contact',
		'/en/contact',
		'/pl/about',
		'/en/about',
		'/pl/privacy-policy',
		'/en/privacy-policy',
		...daysData.flatMap(({ slug }) => [`/pl/day/${slug}`, `/en/day/${slug}`]),
	];

	const urls = paths
		.map((path) => `	<url><loc>${siteUrl}${path}</loc></url>`)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
			},
		},
	);
};
