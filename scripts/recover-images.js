import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://agent-6915ed874df1--paramountpropertyrestoration.netlify.app/images";
const OUTPUT_DIR = path.join(__dirname, '../public/images');

// List of images referenced in the codebase as .webp
const REQUIRED_IMAGES = [
    "bañoMinimalista.webp",
    "banoPortfolioOne.webp",
    "banoPortfolioThree.webp",
    "banoPortfolioTwo.webp",
    "basement-flooding.webp",
    "bathroom-hero.webp",
    "bedroom-hero.webp",
    "bedroomSolutionOne.webp",
    "bedroomSolutionThree.webp",
    "bedroomSolutionTwo.webp",
    "black-mold-removal.webp",
    "ceiling-water-damage.webp",
    "cocinaClasica.webp",
    "emergency-fire-response.webp",
    "emergency-storm-repair.webp",
    "emergency-water-removal.webp",
    "fire-damage-repair.webp",
    "fire-damage.webp",
    "flood-damage.webp",
    "habitacionModerna.webp",
    "hero-fire.webp",
    "hero-mold.webp",
    "hero-storm.webp",
    "hero-water.webp",
    "heroContact.webp",
    "heroRestoration.webp",
    "herowater.webp",
    "home-additions-hero.webp",
    "homeAddSolutionsOne.webp",
    "homeAddSolutionsThree.webp",
    "homeAddSolutionsTwo.webp",
    "hurricane-damage.webp",
    "kitchen-hero.webp",
    "kitchenSolutionsThree.webp",
    "kitchenSolutionsTwo.webp",
    "leak-repair.webp",
    "living-dining-hero.webp",
    "livingDiningSolutionsFour.webp",
    "livingDiningSolutionsOne.webp",
    "livingDiningSolutionsThree.webp",
    "livingDiningSolutionsTwo.webp",
    "mitigation-services.webp",
    "mitigation.webp",
    "moisture-repair.webp",
    "mold-damage.webp",
    "mold-inspection.webp",
    "mold-prevention.webp",
    "mold-testing.webp",
    "moldDamage.webp",
    "og-image.webp",
    "ppr-logo-main.webp",
    "remoBathroomHome.webp",
    "remoBedroom.webp",
    "remoHomeAdditions.webp",
    "remoKitchenHome.webp",
    "smoke-damage.webp",
    "soot-cleanup.webp",
    "storm-damage.webp",
    "storm-debris-removal.webp",
    "stormDamage.webp",
    "water-damage.webp",
    "waterDamage.webp",
    "waterproofing.webp",
    "wind-damage.webp"
];

// Helper to convert kebab-case to camelCase
const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

// Helper to convert kebab-case to PascalCase
const toPascalCase = (str) => {
    const camel = toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const downloadFile = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => resolve(Buffer.concat(chunks)));
            } else {
                reject(new Error(`Status ${res.statusCode}`));
            }
        }).on('error', reject);
    });
};

async function processImage(filename) {
    const targetPath = path.join(OUTPUT_DIR, filename);

    // Skip if already exists and is valid size (>100 bytes)
    if (fs.existsSync(targetPath)) {
        const stats = fs.statSync(targetPath);
        if (stats.size > 100) {
            console.log(`✓ Skipping ${filename} (already exists)`);
            return;
        }
    }

    const basename = path.basename(filename, '.webp');

    // Generate potential source filenames
    const variations = [
        basename, // original
        toCamelCase(basename),
        toPascalCase(basename),
        basename.toLowerCase(),
        basename.replace(/-/g, '') // remove hyphens
    ];

    // Remove duplicates
    const uniqueVariations = [...new Set(variations)];

    const extensions = ['.jpg', '.png', '.jpeg'];

    console.log(`Processing ${filename}...`);

    for (const name of uniqueVariations) {
        for (const ext of extensions) {
            const sourceName = name + ext;
            const url = `${BASE_URL}/${sourceName}`;

            try {
                // console.log(`  Trying ${url}...`);
                const buffer = await downloadFile(url);

                if (buffer.length < 1000) {
                    // Too small, probably an error page or dummy file
                    continue;
                }

                console.log(`  ✓ Found source: ${sourceName}`);

                // Convert to WebP
                await sharp(buffer)
                    .webp({ quality: 80 })
                    .toFile(targetPath);

                console.log(`  ✓ Converted and saved to ${filename}`);
                return; // Success! Move to next image
            } catch (e) {
                // Ignore 404s and continue trying
            }
        }
    }

    console.log(`  ✗ Could not find source for ${filename}`);
}

async function main() {
    console.log("Starting image recovery...");

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const image of REQUIRED_IMAGES) {
        await processImage(image);
    }

    console.log("\nRecovery complete!");
}

main().catch(console.error);
