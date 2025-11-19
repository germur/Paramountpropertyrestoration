#!/bin/bash

# Blog Color Standardization Script
# Replaces all inconsistent colors with brand palette

echo "========================================="
echo "Blog Color Standardization"
echo "========================================="
echo ""

BLOG_DIR="src/pages/blog"

# Brand Colors
BRAND_BLUE="#35c3e9"
BRAND_NAVY="#1E293B"
BRAND_GRAY="#64748B"
BRAND_LIGHT_BG="#f8fafc"
BRAND_BORDER="#e2e8f0"

# Color replacements mapping
declare -A COLOR_MAP=(
  # Greens → Brand Blue
  ["#10b981"]="$BRAND_BLUE"
  ["#059669"]="$BRAND_BLUE"
  ["#064e3b"]="$BRAND_NAVY"
  ["#d1fae5"]="rgba(53, 195, 233, 0.1)"
  ["#86efac"]="$BRAND_BLUE"
  ["#a7f3d0"]="rgba(53, 195, 233, 0.15)"
  
  # Reds → Navy/Muted
  ["#ef4444"]="$BRAND_NAVY"
  ["#dc2626"]="$BRAND_NAVY"
  ["#7f1d1d"]="$BRAND_NAVY"
  ["#fee2e2"]="rgba(30, 41, 59, 0.05)"
  ["#fca5a5"]="rgba(30, 41, 59, 0.2)"
  ["#fecaca"]="rgba(30, 41, 59, 0.1)"
  
  # Oranges → Brand Blue
  ["#ea580c"]="$BRAND_BLUE"
  ["#ffedd5"]="rgba(53, 195, 233, 0.1)"
  
  # Grays (standardize)
  ["#475569"]="$BRAND_GRAY"
  ["#cbd5e1"]="#94a3b8"
  
  # Blues (non-brand)
  ["#2a9fd1"]="#2a9fd1"  # This is correct hover color
)

FILES=("$BLOG_DIR/diy-mold-test-kits-guide.astro"
       "$BLOG_DIR/florida-mold-challenge-sb2a-guide.astro"
       "$BLOG_DIR/homeowner-mold-prevention-guide.astro"
       "$BLOG_DIR/mold-exposure-symptoms-medical-testing.astro"
       "$BLOG_DIR/professional-mold-testing-cost-guide-2025.astro")

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing: $(basename $file)"
    
    # Replace each color
    for old_color in "${!COLOR_MAP[@]}"; do
      new_color="${COLOR_MAP[$old_color]}"
      sed -i '' "s/${old_color}/${new_color}/g" "$file"
    done
    
    echo "  ✓ Completed"
  else
    echo "  ✗ File not found: $file"
  fi
done

echo ""
echo "========================================="
echo "Color Standardization Complete!"
echo "========================================="
