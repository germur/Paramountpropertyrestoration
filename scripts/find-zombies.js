// Lite version using Regex to avoid JSDOM OOM
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const OUTPUT_FILE = path.join(__dirname, '../zombie_report.csv');
const THRESHOLD_WORDS = 300;

// Helper to recursively get files
function getFiles(dir, files = []) {
    if (!fs.existsSync(dir)) return files;
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else {
            if (name.endsWith('.html')) files.push(name);
        }
    }
    return files;
}

function analyzeFileLite(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract Title
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "No Title";

    // Extract Canonical
    const canonicalMatch = content.match(/<link rel="canonical" href="(.*?)"/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : "";

    // Strip Scripts, Styles, SVG, Comments
    content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, ' ');
    content = content.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, ' ');
    content = content.replace(/<svg[\s\S]*?>[\s\S]*?<\/svg>/gi, ' ');
    content = content.replace(/<!--[\s\S]*?-->/g, ' ');

    // Strip Tags
    content = content.replace(/<[^>]+>/g, ' ');

    // Normalize Whitespace
    content = content.replace(/\s+/g, ' ').trim();

    const wordCount = content.split(' ').length;

    return {
        path: filePath.replace(DIST_DIR, ''),
        title,
        wordCount,
        canonical
    };
}

// Main execution
console.log(`🔍 Scanning ${DIST_DIR} for zombies (Regex Mode)...`);
const htmlFiles = getFiles(DIST_DIR);
console.log(`Found ${htmlFiles.length} HTML files.`);

const writeStream = fs.createWriteStream(OUTPUT_FILE);
writeStream.write("Path,Title,WordCount,Status\n");

let zombiesFound = 0;

htmlFiles.forEach(file => {
    try {
        const data = analyzeFileLite(file);
        if (data.wordCount < THRESHOLD_WORDS) {
            writeStream.write(`${data.path},"${data.title.replace(/"/g, '""')}",${data.wordCount},Zombie\n`);
            zombiesFound++;
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});

writeStream.end();
console.log(`\n✅ Audit Complete.`);
console.log(`💀 Potential Zombies Found: ${zombiesFound}`);
console.log(`📄 Report saved to: ${OUTPUT_FILE}`);
