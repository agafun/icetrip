import { readdir, mkdir, stat } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const imagesRoot = join(process.cwd(), 'public', 'images');
const photoExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

for (const folder of (await readdir(imagesRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory() && /^day-\d{2}$/.test(entry.name))) {
	const directory = join(imagesRoot, folder.name);
	const thumbnailsDirectory = join(directory, 'thumbnails');
	await mkdir(thumbnailsDirectory, { recursive: true });

	for (const entry of await readdir(directory, { withFileTypes: true })) {
		if (!entry.isFile() || entry.name === 'map.png' || !photoExtensions.has(extname(entry.name).toLowerCase())) continue;

		const source = join(directory, entry.name);
		const thumbnail = join(thumbnailsDirectory, `${basename(entry.name, extname(entry.name))}.webp`);
		const [sourceStats, thumbnailStats] = await Promise.all([
			stat(source),
			stat(thumbnail).catch(() => undefined)
		]);
		if (thumbnailStats && thumbnailStats.mtimeMs >= sourceStats.mtimeMs) continue;

		await sharp(source)
			.rotate()
			.resize({ width: 560, height: 400, fit: 'cover', withoutEnlargement: true })
			.webp({ quality: 74, effort: 4 })
			.toFile(thumbnail);
	}
}

console.log('Generated gallery thumbnails in public/images/day-*/thumbnails/.');
