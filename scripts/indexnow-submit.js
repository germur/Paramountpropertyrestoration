// scripts/indexnow-submit.js
import { getAllUrls } from '../src/lib/sitemap.js';
import { submitAllUrls } from '../src/lib/indexnow.js';

async function main() {
  console.log('🚀 Starting IndexNow submission for Paramount Property Restoration');
  
  try {
    // Generate all URLs from the sitemap
    console.log('📋 Generating site URLs...');
    const urls = getAllUrls();
    
    console.log(`📊 Found ${urls.length} URLs to submit to IndexNow`);
    console.log('📋 URL categories:');
    
    // Log breakdown for verification
    const staticPages = urls.filter(url => {
      const path = new URL(url).pathname;
      return ['/', '/services', '/restoration', '/portfolio', '/contact', '/blog'].includes(path);
    });
    
    const restorationPages = urls.filter(url => url.includes('/restoration/'));
    const servicePagesWithCities = urls.filter(url => {
      const path = new URL(url).pathname;
      return path.startsWith('/services/') && path.split('/').length === 4;
    });
    const serviceHubPages = urls.filter(url => {
      const path = new URL(url).pathname;
      return path.startsWith('/services/') && path.split('/').length === 3;
    });
    
    console.log(`   • Static pages: ${staticPages.length}`);
    console.log(`   • Restoration pages: ${restorationPages.length}`);
    console.log(`   • Service-city pages: ${servicePagesWithCities.length}`);
    console.log(`   • Service hub pages: ${serviceHubPages.length}`);
    
    // Show sample URLs for verification
    console.log('\n🔍 Sample URLs:');
    console.log('   Static:', staticPages.slice(0, 3));
    console.log('   Restoration:', restorationPages.slice(0, 3));
    console.log('   Service-City:', servicePagesWithCities.slice(0, 3));
    console.log('   Service Hub:', serviceHubPages.slice(0, 3));
    
    // Check for dry run flag
    const isDryRun = process.argv.includes('--dry-run');
    
    if (isDryRun) {
      console.log('\n🧪 DRY RUN MODE - No URLs will be submitted');
      console.log('✅ URL generation test completed successfully!');
      console.log(`📊 Total URLs ready for submission: ${urls.length}`);
      return;
    }
    
    // Submit to IndexNow
    console.log('\n📤 Submitting URLs to IndexNow...');
    const success = await submitAllUrls(urls);

    if (success) {
      console.log('✅ IndexNow submission completed successfully!');
      console.log('🔍 Check Bing Webmaster Tools to verify URL reception');
      console.log(`🌐 Total URLs submitted: ${urls.length}`);
    } else {
      console.warn('⚠️ IndexNow submission failed - build will continue');
      console.warn('💡 This is expected during initial setup or if key verification is pending');
      console.warn('🔧 Check Bing Webmaster Tools and verify key file is accessible');
      // Don't fail the build - exit successfully
      process.exit(0);
    }

  } catch (error) {
    console.warn('⚠️ Error during IndexNow submission:', error.message);
    console.warn('💡 Build will continue - IndexNow is optional');
    // Don't fail the build - exit successfully
    process.exit(0);
  }
}

main();