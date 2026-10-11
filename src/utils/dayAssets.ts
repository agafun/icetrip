import { existsSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const imageRoot = join(process.cwd(), 'public', 'images');
const supportedPhotoExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

import { getPhotoMetadata } from '../data/photoMetadata';

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
		.map((filename) => {
			const thumbnailPath = `/images/${folder}/thumbnails/${filename.replace(/\.[^.]+$/, '.webp')}`;
			const meta = getPhotoMetadata(dayNumber, filename);
			return {
				url: `/images/${folder}/${filename}`,
				thumbnailUrl: existsSync(join(directory, 'thumbnails', filename.replace(/\.[^.]+$/, '.webp')))
					? thumbnailPath
					: `/images/${folder}/${filename}`,
				alt: meta.alt,
				caption: meta.caption ?? { pl: '', en: '' }
			};
		});
}

export function getSafetyPhotoAlt(photoRef: string | undefined, dayNumber: number, customAlt?: { pl: string; en: string }) {
	if (customAlt) return customAlt;
	if (photoRef) {
		const meta = getPhotoMetadata(dayNumber, photoRef);
		return meta.alt;
	}
	return {
		pl: 'Zdjęcie ostrzegawcze z trasy',
		en: 'Safety warning route photo'
	};
}

export function resolveSafetyPhoto(photoRef: string | undefined, dayNumber: number): string | undefined {
	if (!photoRef) return undefined;
	const trimmed = photoRef.trim();
	if (!trimmed) return undefined;

	if (trimmed.startsWith('/') || trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
		return trimmed;
	}

	const folder = dayDirectory(dayNumber);
	const directory = join(imageRoot, folder);

	if (existsSync(directory)) {
		const files: string[] = readdirSync(directory);
		const matched = files.find((file: string) => {
			if (file.toLowerCase() === trimmed.toLowerCase()) return true;
			const base = file.replace(/\.[^.]+$/, '');
			return base.toLowerCase() === trimmed.toLowerCase();
		});

		if (matched) {
			return `/images/${folder}/${matched}`;
		}
	}

	const extension = extname(trimmed) ? '' : '.jpeg';
	return `/images/${folder}/${trimmed}${extension}`;
}
