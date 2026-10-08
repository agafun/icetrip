import { existsSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const imageRoot = join(process.cwd(), 'public', 'images');
const supportedPhotoExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

export interface DayPhoto {
	url: string;
	thumbnailUrl: string;
	alt: { pl: string; en: string };
	caption: { pl: string; en: string };
}

function dayDirectory(dayNumber: number) {
	return `day-${String(dayNumber).padStart(2, '0')}`;
}

export function getDayMapScreenshot(dayNumber: number): string | undefined {
	const folder = dayDirectory(dayNumber);
	return existsSync(join(imageRoot, folder, 'map.png')) ? `/images/${folder}/map.png` : undefined;
}

export function getDayPhotos(dayNumber: number): DayPhoto[] {
	const folder = dayDirectory(dayNumber);
	const directory = join(imageRoot, folder);
	if (!existsSync(directory)) return [];

	return readdirSync(directory, { withFileTypes: true })
		.filter((entry) => entry.isFile() && entry.name !== 'map.png' && supportedPhotoExtensions.has(extname(entry.name).toLowerCase()))
		.map((entry) => entry.name)
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.map((filename, index) => {
			const sequence = filename.match(/^(\d+)/)?.[1] ?? String(index + 1).padStart(2, '0');
			const thumbnailPath = `/images/${folder}/thumbnails/${filename.replace(/\.[^.]+$/, '.webp')}`;
			return {
				url: `/images/${folder}/${filename}`,
				thumbnailUrl: existsSync(join(directory, 'thumbnails', filename.replace(/\.[^.]+$/, '.webp')))
					? thumbnailPath
					: `/images/${folder}/${filename}`,
				alt: {
					pl: `Zdjęcie ${Number(sequence)} z dnia ${dayNumber}`,
					en: `Day ${dayNumber}, photo ${Number(sequence)}`
				},
				caption: { pl: '', en: '' }
			};
		});
}
