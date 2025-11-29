#!/usr/bin/env node

// Script to fix ALL CamelCase image references to kebab-case
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping of CamelCase to kebab-case (based on actual files in public/images)
const imageMap = {
    '/images/SmokeDamage.webp': '/images/smoke-damage.webp',
    '/images/SootCleanup.webp': '/images/soot-cleanup.webp',
    '/images/FireDamageRepair.webp': '/images/fire-damage-repair.webp',
    '/images/EmergencyFireResponse.webp': '/images/emergency-fire-response.webp',
    '/images/MoldInspection.webp': '/images/mold-inspection.webp',
    '/images/BlackMoldRemoval.webp': '/images/black-mold-removal.webp',
    '/images/MoldPrevention.webp': '/images/mold-prevention.webp',
    '/images/Moldtesting.webp': '/images/mold-testing.webp',
    '/images/HurricaneDamage.webp': '/images/hurricane-damage.webp',
    '/images/WindDamage.webp': '/images/wind-damage.webp',
    '/images/StormDebrisRemoval.webp': '/images/storm-debris-removal.webp',
    '/images/EmergencyStormRepair.webp': '/images/emergency-storm-repair.webp',
    '/images/EmergencyWaterRemoval.webp': '/images/emergency-water-removal.webp',
};

// Directories to search
const dirs = [
    'src/components/restoration/templates',
    'sr/pages/blog'
];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const [oldName, newName] of Object.entries(imageMap)) {
        if (content.includes(oldName)) {
            content = content.replaceAll(oldName, newName);
            modified = true;
            console.log(`✓ ${path.basename(filePath)}: ${oldName} -> ${newName}`);
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let totalFiles = 0;

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory() && !file.name.startsWith('.')) {
            totalFiles += processDirectory(fullPath);
        } else if (file.isFile() && (file.name.endsWith('.astro') || file.name.endsWith('.jsx'))) {
            if (replaceInFile(fullPath)) {
                totalFiles++;
            }
        }
    }

    return totalFiles;
}

console.log('🔍 Scanning for CamelCase image references...\n');

let total = 0;
for (const dir of dirs) {
    if (fs.existsSync(dir)) {
        console.log(`\n📁 Processing ${dir}...`);
        total += processDirectory(dir);
    }
}

console.log(`\n✅ Done! Fixed ${total} files.\n`);
