#!/bin/bash

# Script to update all image references from .jpg/.jpeg/.png to .webp

echo "==================================="
echo "Updating Image References to WebP"
echo "==================================="
echo ""

# Find all files with image references
FILES=$(grep -r "images/.*\.\(jpg\|jpeg\|png\)" src/ --include="*.astro" --include="*.jsx" --include="*.js" --include="*.ts" -l | sort | uniq)

COUNT=0
for file in $FILES; do
  echo "Updating: $file"
  
  # Replace .jpg with .webp
  sed -i '' 's/\.jpg/\.webp/g' "$file"
  
  # Replace .jpeg with .webp
  sed -i '' 's/\.jpeg/\.webp/g' "$file"
  
  # Replace .png with .webp
  sed -i '' 's/\.png/\.webp/g' "$file"
  
  COUNT=$((COUNT + 1))
done

echo ""
echo "✓ Updated $COUNT files"
echo "==================================="
