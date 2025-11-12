// src/lib/indexnow.js
const INDEXNOW_API_KEY = '196aabc169312b76f1539847beee6f9f';
const SITE_URL = (process.env.SITE_URL || 'https://paramountpropertyrestoration.com').replace(/\/$/, '');

export { INDEXNOW_API_KEY };

/**
 * Submit URLs to IndexNow for immediate indexing
 * @param {string|string[]} urls - Single URL or array of URLs to submit
 * @param {string} host - Host domain (defaults to SITE_URL)
 * @returns {Promise<boolean>} Success status
 */
export async function submitToIndexNow(urls, host = null) {
  try {
    const urlArray = Array.isArray(urls) ? urls : [urls];
    const hostDomain = host || new URL(SITE_URL).hostname;
    
    // IndexNow API endpoint for Bing
    const indexNowUrl = 'https://api.indexnow.org/IndexNow';
    
    // Note: keyLocation is optional when key file is in root directory
    const payload = {
      host: hostDomain,
      key: INDEXNOW_API_KEY,
      urlList: urlArray
    };

    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'ParamountPropertyRestoration IndexNow Submitter'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow: Successfully submitted ${urlArray.length} URLs`);
      return true;
    } else if (response.status === 403) {
      console.warn(`⚠️ IndexNow 403 Forbidden - Key verification may be pending`);
      console.warn(`💡 Ensure key file is accessible at: ${SITE_URL}/${INDEXNOW_API_KEY}.txt`);
      console.warn(`🔧 Visit Bing Webmaster Tools to verify domain ownership`);
      return false;
    } else if (response.status === 429) {
      console.warn(`⚠️ IndexNow 429 Rate Limited - Too many requests`);
      return false;
    } else if (response.status === 422) {
      console.warn(`⚠️ IndexNow 422 Unprocessable - Invalid URL format or key`);
      return false;
    } else {
      console.warn(`⚠️ IndexNow ${response.status}: ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.warn('⚠️ IndexNow Submission Error:', error.message);
    return false;
  }
}

/**
 * Submit a single URL for immediate indexing
 * @param {string} url - URL to submit
 * @returns {Promise<boolean>} Success status
 */
export async function submitSingleUrl(url) {
  return submitToIndexNow([url]);
}

/**
 * Generate IndexNow submission for all site URLs
 * Uses existing sitemap generation to collect all URLs
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<boolean>} Success status
 */
export async function submitAllUrls(urls) {
  if (!urls || urls.length === 0) {
    console.warn('⚠️ No URLs provided for IndexNow submission');
    return false;
  }

  // Submit in batches of 10,000 URLs (IndexNow maximum per request)
  const batchSize = 10000;
  const batches = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  let successCount = 0;
  
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`📤 Submitting batch ${i + 1}/${batches.length} (${batch.length} URLs)`);
    
    const success = await submitToIndexNow(batch);
    if (success) {
      successCount++;
    }
    
    // Add delay between batches to avoid rate limiting
    if (i < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`🎯 IndexNow Complete: ${successCount}/${batches.length} batches submitted successfully`);
  return successCount === batches.length;
}

/**
 * Create robots.txt entry for IndexNow key file
 * @returns {string} Robots.txt content for IndexNow
 */
export function generateRobotsIndexNowEntry() {
  return `
# IndexNow Key File
Allow: /${INDEXNOW_API_KEY}.txt`;
}

export default {
  submitToIndexNow,
  submitSingleUrl,
  submitAllUrls,
  generateRobotsIndexNowEntry,
  INDEXNOW_API_KEY
};