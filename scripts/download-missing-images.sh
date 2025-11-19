#!/bin/bash

# Script to download missing images from Netlify deployment
BASE_URL="https://agent-6915ed874df1--paramountpropertyrestoration.netlify.app"
IMAGE_DIR="public/images"

echo "Downloading missing images from deployment..."

# List of critical images that need to be downloaded
IMAGES=(
    "herowater.jpg"
    "herofire.jpg"
    "heroMold.jpg"
    "heroStorm.jpg"
    "herowater2.jpg"
    "heroContact.jpg"
    "portadaHome.jpg"
    "fireDamage.jpg"
    "moldDamage.jpg"
    "stormDamage.jpg"
    "mitigation.jpg"
    "bathroomHero.jpg"
    "kitchenHero.jpg"
    "bedroomHero.jpg"
    "livingDiningHero.jpg"
    "home-additionsHero.jpg"
    "remoBathroomHome.jpg"
    "remoKitchenHome.jpg"
    "remoBedroom.jpg"
    "remoLivingDining.jpg"
    "remoHomeAdditions.jpg"
    "cocina.jpg"
    "cocinaClasica.jpg"
    "bano.jpg"
    "bañoLujo.jpg"
    "bañoMinimalista.jpg"
    "dormitorio.jpg"
    "habitacionModerna.jpg"
    "habitaRustica.jpg"
    "oficinaEjecutiva.jpg"
    "arquite2.jpg"
    "kitchenSolutionsOne.jpg"
    "kitchenSolutionsTwo.jpg"
    "kitchenSolutionsThree.jpg"
    "kitchenSolutionsFour.jpg"
    "bathtub-replacement.jpg"
    "vanity-storage.jpg"
    "moisture-repair.jpg"
    "waterproofing.jpg"
    "bedroomSolutionOne.jpg"
    "bedroomSolutionTwo.jpg"
    "bedroomSolutionThree.jpg"
    "bedroomSolutionFour.jpg"
    "livingDiningSolutionsOne.jpg"
    "livingDiningSolutionsTwo.jpg"
    "livingDiningSolutionsThree.jpg"
    "livingDiningSolutionsFour.jpg"
    "homeAddSolutionsOne.jpg"
    "homeAddSolutionsTwo.jpg"
    "homeAddSolutionsThree.jpg"
    "homeAddSolutionsFour.jpg"
    "banoPortfolioOne.jpg"
    "banoPortfolioTwo.jpg"
    "banoPortfolioThree.jpg"
    "BanoAntesDespues.jpeg"
    "concinaAntesDespues.jpeg"
    "carroManu1.jpg"
    "carroManu2.jpg"
    "carroManu3.jpg"
    "carroManu4.jpg"
    "EmergencyWaterRemoval.jpg"
    "FloodDamage.jpg"
    "LeakRepair.jpg"
    "BasementFlooding.jpg"
    "CeilingWaterDamage.jpg"
    "BlackMoldRemoval.jpg"
    "MoldInspection.jpg"
    "MoldPrevention.jpg"
    "Moldtesting.jpg"
    "EmergencyFireResponse.jpg"
    "FireDamageRepair.jpg"
    "SmokeDamage.jpg"
    "SootCleanup.jpg"
    "HurricaneDamage.jpg"
    "WindDamage.jpg"
    "StormDebrisRemoval.jpg"
    "EmergencyStormRepair.jpg"
    "backgroundTemplateSeo.jpg"
    "tiendaModa.jpg"
    "miami.png"
    "orlando.png"
    "tampa.png"
    "saratosa.png"
)

cd "$IMAGE_DIR"

success_count=0
fail_count=0

for img in "${IMAGES[@]}"; do
    echo "Downloading $img..."
    curl -s -L -o "$img" "$BASE_URL/images/$img"
    
    # Check if download was successful
    size=$(wc -c < "$img" | tr -d ' ')
    if [ $size -gt 1000 ]; then
        echo "✓ $img downloaded successfully ($size bytes)"
        ((success_count++))
    else
        echo "✗ Failed to download $img (only $size bytes)"
        ((fail_count++))
    fi
done

echo ""
echo "Download complete!"
echo "Success: $success_count images"
echo "Failed: $fail_count images"
