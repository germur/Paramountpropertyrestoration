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
    
    const payload = {
      host: hostDomain,
      key: INDEXNOW_API_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_API_KEY}.txt`,
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

    if (response.ok) {
      console.log(`✅ IndexNow: Successfully submitted ${urlArray.length} URLs`);
      return true;
    } else {
      console.error(`❌ IndexNow Error: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error('❌ IndexNow Submission Error:', error);
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

  // Submit in batches of 100 URLs (IndexNow recommended limit)
  const batchSize = 100;
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