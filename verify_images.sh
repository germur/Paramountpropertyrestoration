#!/bin/bash

# Find all image references in src/
grep -rE "[\"']/[^\"']+\.(jpg|jpeg|png|webp|svg)[\"']" src | grep -v "node_modules" | while read -r line; do
  # Extract the image path
  img_path=$(echo "$line" | grep -oE "/[^\"']+\.(jpg|jpeg|png|webp|svg)" | head -1)
  
  # Remove leading slash for filesystem check
  fs_path="public$img_path"
  
  if [ ! -f "$fs_path" ]; then
    echo "MISSING: $img_path (referenced in $line)"
  fi
done
