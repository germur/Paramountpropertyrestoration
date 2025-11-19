#!/bin/bash

# Image Optimization Audit Script
# Analyzes current image usage and generates optimization report

echo "==================================="
echo "IMAGE OPTIMIZATION AUDIT"
echo "==================================="
echo ""

# Count total images
TOTAL_IMAGES=$(find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) | wc -l | tr -d ' ')
echo "📊 Total images in public/images/: $TOTAL_IMAGES"

# Size analysis
TOTAL_SIZE=$(du -sh public/images/ | awk '{print $1}')
echo "💾 Total size: $TOTAL_SIZE"
echo ""

# Format breakdown
echo "📁 Format Breakdown:"
JPG_COUNT=$(find public/images -type f -name "*.jpg" | wc -l | tr -d ' ')
JPEG_COUNT=$(find public/images -type f -name "*.jpeg" | wc -l | tr -d ' ')
PNG_COUNT=$(find public/images -type f -name "*.png" | wc -l | tr -d ' ')
WEBP_COUNT=$(find public/images -type f -name "*.webp" | wc -l | tr -d ' ')

echo "  - JPG files: $JPG_COUNT"
echo "  - JPEG files: $JPEG_COUNT"
echo "  - PNG files: $PNG_COUNT"
echo "  - WebP files: $WEBP_COUNT"
echo ""

# Find images referenced in code
echo "🔍 Scanning for image references in code..."
echo ""

# Create temporary file for all image filenames
find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) -exec basename {} \; | sort > /tmp/all_images.txt

# Create temporary file for referenced images
grep -rh "images/" src/ --include="*.astro" --include="*.jsx" --include="*.js" --include="*.ts" | \
  grep -o '/images/[^"'\''[:space:]]*' | \
  sed 's|/images/||' | \
  sort | uniq > /tmp/referenced_images.txt

REFERENCED_COUNT=$(wc -l < /tmp/referenced_images.txt | tr -d ' ')
echo "✅ Images referenced in code: $REFERENCED_COUNT"

# Find unused images
comm -23 /tmp/all_images.txt /tmp/referenced_images.txt > /tmp/unused_images.txt
UNUSED_COUNT=$(wc -l < /tmp/unused_images.txt | tr -d ' ')

echo "❌ Potentially unused images: $UNUSED_COUNT"
echo ""

if [ $UNUSED_COUNT -gt 0 ]; then
  echo "📋 Unused images list (first 20):"
  head -20 /tmp/unused_images.txt | sed 's/^/  - /'
  echo ""
fi

# Estimate WebP savings (conservative 30% reduction)
CURRENT_MB=$(du -sm public/images/ | awk '{print $1}')
ESTIMATED_WEBP_MB=$((CURRENT_MB * 70 / 100))
SAVINGS_MB=$((CURRENT_MB - ESTIMATED_WEBP_MB))

echo "💰 Estimated WebP Conversion Savings:"
echo "  - Current: ${CURRENT_MB}MB"
echo "  - After WebP: ~${ESTIMATED_WEBP_MB}MB"
echo "  - Savings: ~${SAVINGS_MB}MB (30%)"
echo ""

echo "==================================="
echo "AUDIT COMPLETE"
echo "==================================="

# Cleanup
rm -f /tmp/all_images.txt /tmp/referenced_images.txt /tmp/unused_images.txt
