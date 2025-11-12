# AI Image Generation Instructions for Blog Articles

## Overview
Generate 5 professional WebP images for blog articles about mold inspection, testing, and remediation in Florida homes.

## Required Specifications
- **Format**: WebP
- **Dimensions**: 1200x675px (16:9 aspect ratio)
- **Quality**: 85-90% (optimized for web)
- **Style**: Professional, photorealistic, bright natural lighting
- **Theme**: Modern Florida homes, professional services

---

## Image 1: DIY Mold Testing Kit
**Filename**: `diy-mold-testing-kit-hero.webp`
**Alt Text**: DIY mold testing kit on kitchen counter with test swabs and petri dishes - Florida homeowner mold testing guide

### AI Prompt:
```
Professional photograph of DIY mold testing kit on modern kitchen counter, test swabs and petri dishes visible, clean white countertop, Florida home interior background, bright natural sunlight through window, clean and informative product photography style, high resolution, shallow depth of field, professional real estate photography lighting, modern home setting, educational and trustworthy feel
```

### Key Elements:
- DIY mold test kit (box/packaging visible)
- Test swabs, petri dishes
- Modern kitchen counter (white/light colored)
- Bright, clean environment
- Professional product photography style

---

## Image 2: Florida Mold Inspection
**Filename**: `florida-mold-inspection-hero.webp`
**Alt Text**: Professional mold inspector examining Florida home wall with moisture meter and testing equipment

### AI Prompt:
```
Professional mold inspector in branded polo shirt examining interior wall with digital moisture meter device, flashlight in other hand, modern Florida residential interior, professional inspection scene, bright natural lighting from windows, photorealistic style, professional service photography, trustworthy and expert atmosphere, modern home interior, inspector focused on wall inspection
```

### Key Elements:
- Professional inspector (branded shirt)
- Moisture meter/testing device in hand
- Examining wall closely
- Bright, well-lit interior
- Professional service atmosphere

---

## Image 3: Mold Prevention at Home
**Filename**: `mold-prevention-home-hero.webp`
**Alt Text**: Clean modern Florida home interior with dehumidifier showing proper mold prevention techniques

### AI Prompt:
```
Clean, modern Florida home interior living room with white dehumidifier unit in corner, bright airy space with large windows, proper ventilation visible, indoor plants, contemporary furniture, natural sunlight flooding room, professional real estate photography style, pristine clean condition, prevention and maintenance concept, fresh and healthy home atmosphere, coastal modern design
```

### Key Elements:
- Modern dehumidifier (white, sleek design)
- Bright, airy living space
- Large windows with natural light
- Clean, well-maintained interior
- Prevention-focused atmosphere

---

## Image 4: Medical Mold Testing
**Filename**: `mold-health-symptoms-hero.webp`
**Alt Text**: Medical professional reviewing mold exposure test results with patient in modern clinic

### AI Prompt:
```
Professional medical consultation scene, caring doctor in white coat discussing test results with patient across modern desk, clipboard or tablet with medical charts visible, modern clinic interior with natural lighting, warm and professional medical atmosphere, photorealistic style, healthcare setting, doctor-patient consultation, comfortable medical office, trustworthy healthcare professional
```

### Key Elements:
- Doctor in white coat
- Patient consultation setting
- Medical test results/charts
- Modern clinic interior
- Caring, professional atmosphere

---

## Image 5: Professional Mold Testing Service
**Filename**: `professional-mold-testing-hero.webp`
**Alt Text**: Professional mold remediation specialist conducting thorough inspection in Florida home with advanced testing equipment

### AI Prompt:
```
Professional mold remediation specialist in protective equipment conducting thorough inspection in modern Florida home, advanced air quality testing device and moisture detection equipment visible, professional service photography, bright interior lighting, high-end residential setting, expert service atmosphere, modern home interior, professional restoration company branding elements, trustworthy professional service
```

### Key Elements:
- Professional specialist (branded uniform)
- Advanced testing equipment (air quality tester, moisture meter)
- Modern Florida home interior
- Professional service setting
- High-quality, premium service feel

---

## Image Generation Tools Recommended

### Option 1: DALL-E 3 (OpenAI)
- Best for photorealistic results
- Use prompts as provided above
- Request 1024x1024 then crop/resize to 1200x675
- Export as PNG then convert to WebP

### Option 2: Midjourney
- Add "--ar 16:9" to prompts
- Use "--style raw" for photorealistic
- Use "--v 6" for latest version
- Export as PNG then convert to WebP

### Option 3: Stable Diffusion (Local/API)
- Use realistic checkpoint models
- Add "photorealistic, professional photography" to prompts
- Resolution: 1200x675
- Export as WebP directly if possible

---

## WebP Conversion (if needed)

### Using ImageMagick:
```bash
convert input.png -quality 85 -define webp:lossless=false output.webp
```

### Using cwebp (Google):
```bash
cwebp -q 85 input.png -o output.webp
```

### Online Tools:
- https://squoosh.app/ (Google's tool)
- https://cloudconvert.com/png-to-webp

---

## Placement Instructions

1. Save all generated WebP images to: `/public/images/blog/`

2. Update blog article frontmatter to use new images:

```markdown
image: "/images/blog/diy-mold-testing-kit-hero.webp"
ogImage: "/images/blog/diy-mold-testing-kit-hero.webp"
```

3. Alt texts are already configured in `/src/data/image-alt-texts.js`

---

## Quality Checklist

Before finalizing each image, verify:
- [ ] 1200x675px dimensions (16:9 aspect ratio)
- [ ] WebP format
- [ ] File size under 200KB
- [ ] Bright, professional lighting
- [ ] No watermarks or stock photo indicators
- [ ] Relevant to article content
- [ ] Professional, trustworthy appearance
- [ ] Clear focal point
- [ ] Good contrast and sharpness

---

## Article to Image Mapping

| Article | New Image Filename |
|---------|-------------------|
| diy-mold-test-kits-guide.md | diy-mold-testing-kit-hero.webp |
| florida-mold-challenge-sb2a-guide.md | florida-mold-inspection-hero.webp |
| homeowner-mold-prevention-guide.md | mold-prevention-home-hero.webp |
| mold-exposure-symptoms-medical-testing.md | mold-health-symptoms-hero.webp |
| professional-mold-testing-cost-guide-2025.md | professional-mold-testing-hero.webp |

---

## Notes

- All images should convey trust, professionalism, and expertise
- Florida-specific elements (modern architecture, bright interiors) preferred
- Avoid generic stock photo appearance
- Focus on educational and service-oriented feel
- Maintain brand consistency across all images
