# IndexNow Integration Documentation

This document explains the IndexNow integration for Paramount Property Restoration to enable immediate indexing in Bing and other supported search engines.

## What is IndexNow?

IndexNow is a protocol that allows websites to notify search engines immediately when content is added, updated, or deleted. This helps ensure faster discovery and indexing of your website changes.

## Implementation Overview

The IndexNow implementation includes:

1. **API Key Generation**: A unique 32-character key (`196aabc169312b76f1539847beee6f9f`) to verify domain ownership
2. **Key File**: The API key is stored in `/public/196aabc169312b76f1539847beee6f9f.txt` (root directory as per spec)
3. **URL Collection**: Automated generation of all website URLs from the restoration data
4. **Submission Scripts**: Node.js scripts to submit URLs to IndexNow APIs
5. **Build Integration**: npm scripts to include IndexNow in the build process

**Implementation follows official IndexNow.org specifications:**
- UTF-8 encoded key file in root directory
- JSON payload with required fields only (host, key, urlList)
- Batches up to 10,000 URLs per request (IndexNow maximum)
- Content-Type: application/json; charset=utf-8

## Files Created/Modified

### New Files
- `public/196aabc169312b76f1539847beee6f9f.txt` - IndexNow API key file
- `src/lib/indexnow.js` - IndexNow submission utilities
- `scripts/indexnow-submit.js` - CLI script for IndexNow submissions

### Modified Files
- `src/lib/sitemap.js` - Updated to use actual restoration data for URL generation
- `package.json` - Added IndexNow npm scripts
- `public/robots.txt` - Added IndexNow key file reference

## Available Commands

### URL Testing
```bash
# Quick count of URLs
npm run indexnow:urls

# Detailed breakdown with samples (dry run)
npm run indexnow:test
```

### IndexNow Submission
```bash
# Submit all URLs to IndexNow
npm run indexnow:submit

# Build site and submit to IndexNow
npm run build:indexnow
```

## URL Coverage

The implementation generates **1,686 URLs** covering:

- **Static Pages** (6): Homepage, services, restoration, portfolio, contact, blog
- **Restoration Pages** (1,369): All combinations of restoration services with Florida cities
  - Service group pages (water-damage, fire-damage, etc.)
  - Subservice pages (flood-damage, smoke-damage, etc.)
  - City-specific pages (service/subservice/city combinations)
- **Remodeling Services** (310): Kitchen, bathroom, bedroom, living-dining, home additions
  - Service hub pages
  - Service-city combinations across all Florida cities

## How It Works

1. **URL Generation**: The system dynamically generates URLs from:
   - `restorationGroups` data (47+ cities × 18 subservices across 5 groups)
   - Remodeling services (5 services × 61 cities)
   - Static pages and hub pages

2. **Batch Submission**: URLs are submitted in batches of 100 to comply with IndexNow recommendations

3. **Error Handling**: The system includes retry logic and detailed logging

## IndexNow API Details

- **Endpoint**: `https://api.indexnow.org/IndexNow`
- **Method**: POST
- **Authentication**: API key verification via hosted txt file in root directory
- **Batch Size**: Up to 10,000 URLs per request (per IndexNow.org specification)
- **Required Fields**: host, key, urlList
- **Optional Fields**: keyLocation (only if key file not in root)

## Verification

To verify IndexNow submissions are working:

1. **Check Bing Webmaster Tools**: Monitor URL reception and indexing status
2. **Monitor Logs**: Review submission logs for success/failure rates  
3. **Test Key File**: Verify `https://paramountpropertyrestoration.com/196aabc169312b76f1539847beee6f9f.txt` is accessible

## Usage Recommendations

### During Development
```bash
# Test URL generation
npm run indexnow:test
```

### After Content Updates
```bash
# Submit only changed URLs (manual selection recommended)
npm run indexnow:submit
```

### After Major Site Updates
```bash
# Full build and submission
npm run build:indexnow
```

## Security Notes

- The API key is public (required by IndexNow protocol)
- The key file must be accessible at the website root
- No sensitive data is transmitted through IndexNow APIs
- Only publicly accessible URLs are submitted

## Supported Search Engines

IndexNow is supported by:
- Microsoft Bing
- Yandex
- Seznam.cz
- IndexNow.org (which distributes to other search engines)

## Troubleshooting

### Common Issues

1. **403 Forbidden Error**
   - **Cause**: Domain ownership not verified in Bing Webmaster Tools OR key file not accessible
   - **Solution**:
     - Verify key file is accessible: `https://paramountpropertyrestoration.com/196aabc169312b76f1539847beee6f9f.txt`
     - Add and verify your site in [Bing Webmaster Tools](https://www.bing.com/webmasters)
     - Wait 24-48 hours after verification for propagation
   - **Note**: Build will continue successfully even if IndexNow fails during initial setup

2. **URLs not found**: Check that restoration.js data is correctly imported

3. **Key file access**: Ensure the txt file is in the public directory

4. **Batch failures**: Review network connectivity and API quotas

5. **URL generation errors**: Verify city and service data integrity

### Debug Commands
```bash
# Count URLs by category
node -e "import('./src/lib/sitemap.js').then(m => { const urls = m.getAllUrls(); console.log('Total:', urls.length); console.log('Sample:', urls.slice(0, 10)); })"

# Test single URL submission
node -e "import('./src/lib/indexnow.js').then(m => m.submitSingleUrl('https://paramountpropertyrestoration.com/'))"
```

## Future Enhancements

1. **Selective Submission**: Only submit URLs that have actually changed
2. **Webhook Integration**: Trigger submissions on content updates
3. **Analytics Integration**: Track indexing success rates
4. **Multiple Search Engines**: Submit to individual search engine endpoints