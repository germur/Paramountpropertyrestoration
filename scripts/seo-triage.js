
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simple fuzzy matching or containment check
function findBestMatch(badUrl, allUrls) {
    const badSlug = badUrl.split('/').filter(Boolean).pop();
    if (!badSlug) return null;

    let bestMatch = null;
    let maxScore = 0;

    for (const goodUrl of allUrls) {
        if (goodUrl.includes(badSlug)) {
            return goodUrl; // High confidence if slug is contained
        }
        // Add more complex logic here if needed (Levenshtein etc.)
    }
    return null;
}

async function main() {
    console.log("Starting SEO Triage...");

    // TODO: Load sitemap or list of valid URLs to check against
    // For now, this is a placeholder structure
    const validUrls = [
        // Populate this with a crawl or sitemap parse
        '/mold-testing-air-quality/',
        '/restoration/water-damage/',
        '/services/kitchen-remodeling/'
    ];

    // TODO: Load 404 list
    const badUrls = [
        '/restoration/remodeling-services', // From checking seo_audit.csv
        '/tools'
    ];

    console.log(`Checking ${badUrls.length} potentially broken URLs against ${validUrls.length} valid URLs...`);

    const suggestions = [];

    for (const bad of badUrls) {
        const match = findBestMatch(bad, validUrls);
        if (match) {
            suggestions.push({
                original: bad,
                suggested: match,
                confidence: 'High'
            });
        } else {
            suggestions.push({
                original: bad,
                suggested: null,
                confidence: 'None'
            });
        }
    }

    console.table(suggestions);
}

main().catch(console.error);
