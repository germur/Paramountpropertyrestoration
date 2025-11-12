#!/bin/bash

# Script to convert all JPG, JPEG, and PNG images to WebP format
# Quality: 85 (good balance between size and quality)

echo "Converting images to WebP format..."

# Find all image files and convert them
find public/images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read file; do
    # Get the filename without extension
    filename="${file%.*}"

    # Skip if WebP already exists
    if [ -f "${filename}.webp" ]; then
        echo "Skipping $file (WebP already exists)"
        continue
    fi

    # Convert to WebP with 85% quality
    echo "Converting: $file"
    cwebp -q 85 "$file" -o "${filename}.webp" 2>/dev/null

    if [ $? -eq 0 ]; then
        echo "✓ Created ${filename}.webp"
    else
        echo "✗ Failed to convert $file"
    fi
done

echo ""
echo "Conversion complete!"
echo "Checking file sizes..."

# Compare sizes
total_original=0
total_webp=0

find public/images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read file; do
    filename="${file%.*}"
    if [ -f "${filename}.webp" ]; then
        orig_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
        webp_size=$(stat -f%z "${filename}.webp" 2>/dev/null || stat -c%s "${filename}.webp")

        total_original=$((total_original + orig_size))
        total_webp=$((total_webp + webp_size))
    fi
done

echo "Original images total: $(du -sh public/images | cut -f1)"
echo "WebP images: $(find public/images -name "*.webp" | wc -l) files created"
