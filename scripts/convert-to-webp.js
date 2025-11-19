import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const quality = 85; // Balance between quality and size

console.log('=================================');
console.log('WebP Conversion Script');
console.log('=================================\n');

async function convertToWebP(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    // Only convert JPG, JPEG, and PNG
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        return null;
    }

    const filename = path.basename(filePath);
    const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputFilename = path.basename(outputPath);

    try {
        // Get original file size
        const originalStats = await fs.stat(filePath);
        const originalSizeKB = (originalStats.size / 1024).toFixed(2);

        // Convert to WebP
        await sharp(filePath)
            .webp({ quality })
            .toFile(outputPath);

        // Get new file size
        const newStats = await fs.stat(outputPath);
        const newSizeKB = (newStats.size / 1024).toFixed(2);
        const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

        console.log(`✓ ${filename} → ${outputFilename}`);
        console.log(`  ${originalSizeKB}KB → ${newSizeKB}KB (${savings}% smaller)\n`);

        return {
            original: filename,
            converted: outputFilename,
            originalSize: originalStats.size,
            newSize: newStats.size,
            savings: parseFloat(savings)
        };
    } catch (error) {
        console.error(`✗ Error converting ${filename}:`, error.message);
        return null;
    }
}

async function main() {
    try {
        const files = await fs.readdir(imagesDir);
        const results = [];

        for (const file of files) {
            const filePath = path.join(imagesDir, file);
            const stats = await fs.stat(filePath);

            if (stats.isFile()) {
                const result = await convertToWebP(filePath);
                if (result) {
                    results.push(result);
                }
            }
        }

        // Summary
        console.log('=================================');
        console.log('CONVERSION COMPLETE');
        console.log('=================================\n');
        console.log(`✓ Converted: ${results.length} images`);

        const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
        const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
        const totalSavings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);

        console.log(`  Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  New size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Total savings: ${totalSavings}%`);
        console.log(`  Space saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB\n`);

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main();
