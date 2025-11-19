#!/bin/bash

# Script to download images from Netlify deployment
BASE_URL="https://agent-6915ed874df1--paramountpropertyrestoration.netlify.app"
IMAGE_DIR="public/images"

echo "Downloading images from deployment..."

# Create a list of all image files
cd "$IMAGE_DIR"

# Download each image
for img in *.jpg *.jpeg *.png; do
    if [ -f "$img" ]; then
        echo "Downloading $img..."
        curl -s -o "$img" "$BASE_URL/images/$img"
        
        # Check if download was successful
        size=$(wc -c < "$img")
        if [ $size -gt 100 ]; then
            echo "✓ $img downloaded successfully ($size bytes)"
        else
            echo "✗ Failed to download $img (only $size bytes)"
        fi
    fi
done

# Download blog images
if [ -d "blog" ]; then
    cd blog
    for img in *.jpg *.jpeg *.png; do
        if [ -f "$img" ]; then
            echo "Downloading blog/$img..."
            curl -s -o "$img" "$BASE_URL/images/blog/$img"
            
            size=$(wc -c < "$img")
            if [ $size -gt 100 ]; then
                echo "✓ blog/$img downloaded successfully ($size bytes)"
            else
                echo "✗ Failed to download blog/$img (only $size bytes)"
            fi
        fi
    done
fi

echo "Download complete!"
