# Schema.org Markup Validation Guide

Complete guide for validating and optimizing structured data for rich snippets.

## 🎯 IMPLEMENTED SCHEMAS

### 1. **LocalBusiness Schema** (All Pages)
**Purpose:** Show business info, ratings, hours in Google search
**Features:**
- ✅ Business name, phone, email
- ✅ Address and geo-coordinates
- ✅ Opening hours (24/7)
- ✅ Aggregate ratings (4.9/5)
- ✅ Price range ($$)
- ✅ Areas served
- ✅ Social media profiles

**Rich Snippet Result:**
- Business name with rating stars
- Phone number clickable
- Hours of operation
- Price range indicator

### 2. **Service Schema** (Service Pages)
**Purpose:** Detail specific services offered
**Features:**
- ✅ Service name and description
- ✅ Provider information
- ✅ Area served
- ✅ Service type
- ✅ Contact channels (phone, URL)
- ✅ Offer catalog
- ✅ 24/7 availability

**Rich Snippet Result:**
- Service description
- Provider name
- Contact options
- Availability status

### 3. **Article Schema** (Blog Posts)
**Purpose:** Show article previews with author, date, images
**Features:**
- ✅ Headline and description
- ✅ Featured image (1200x630)
- ✅ Author information
- ✅ Publisher with logo
- ✅ Publication/modification dates
- ✅ Article section/category
- ✅ Keywords
- ✅ Language

**Rich Snippet Result:**
- Article card with image
- Author name
- Publication date
- Publisher logo

### 4. **FAQPage Schema** (FAQ Sections)
**Purpose:** Display questions/answers in search results
**Features:**
- ✅ List of questions
- ✅ Accepted answers
- ✅ Expandable in SERP

**Rich Snippet Result:**
- Accordion-style FAQ in search
- Click to expand answers
- Takes up more SERP space

### 5. **HowTo Schema** (Process Sections) - Available
**Purpose:** Step-by-step guides in search results
**Features:**
- ✅ Process name
- ✅ Total time
- ✅ Numbered steps
- ✅ Step images
- ✅ Step descriptions

**Rich Snippet Result:**
- Numbered step list
- Time estimate
- Visual carousel

### 6. **Organization Schema** - Available
**Purpose:** Define business entity
**Features:**
- ✅ Organization type
- ✅ Contact information
- ✅ Logo
- ✅ Social profiles

### 7. **BreadcrumbList Schema** - Available
**Purpose:** Show breadcrumb navigation
**Features:**
- ✅ Hierarchical structure
- ✅ Position indicators
- ✅ URLs

**Rich Snippet Result:**
- Breadcrumb trail in search
- Better user navigation

## 🧪 VALIDATION TOOLS

### 1. **Google Rich Results Test**
**URL:** https://search.google.com/test/rich-results

**How to Use:**
1. Go to the tool
2. Enter full page URL or paste HTML
3. Click "Test URL"
4. Check for:
   - ✅ Valid schemas detected
   - ⚠️ Warnings (optional improvements)
   - ❌ Errors (must fix)

**Example URLs to Test:**
```
Blog Post:
https://paramountpropertyrestoration.com/blog/professional-mold-testing-cost-guide-2025/

Service Page:
https://paramountpropertyrestoration.com/restoration/water-damage/

City Page:
https://paramountpropertyrestoration.com/services/kitchen-remodeling/orlando/
```

### 2. **Schema.org Validator**
**URL:** https://validator.schema.org/

**How to Use:**
1. Paste JSON-LD code or URL
2. Click "Run Test"
3. Review results:
   - Type detected
   - Properties found
   - Missing recommended fields

### 3. **Google Search Console**
**URL:** https://search.google.com/search-console

**Enhancement Reports:**
- Articles
- FAQs
- Local Business
- Products (if applicable)

**Check:**
- Total valid items
- Items with errors
- Items with warnings
- Trending data

## 📊 SCHEMA CHECKLIST BY PAGE TYPE

### **Service Pages**
```json
✅ LocalBusiness Schema
   - Name, URL, Phone
   - Address, Geo
   - Hours (24/7)
   - Ratings
   - Areas served

✅ Service Schema
   - Service name
   - Description
   - Provider
   - ServiceType
   - AvailableChannel
   - OfferCatalog

✅ FAQPage Schema (if FAQs present)
   - Questions
   - Answers

✅ BreadcrumbList Schema
   - Navigation hierarchy
```

### **Blog Posts**
```json
✅ Article Schema
   - Headline
   - Description
   - Image (1200x630)
   - Author
   - Publisher + Logo
   - Dates (published, modified)
   - Keywords
   - Category

✅ Organization Schema
   - Publisher info

✅ FAQPage Schema (if applicable)

✅ BreadcrumbList Schema
```

### **City/Location Pages**
```json
✅ LocalBusiness Schema
   - With specific city address
   - City-specific areaServed

✅ Service Schema
   - City-specific service

✅ WebPage Schema
   - Page details
```

## 🚀 OPTIMIZATION TIPS

### **For Better Rich Snippets:**

1. **Always Include Images**
   - Minimum: 1200x630px
   - Format: JPG, PNG, WebP
   - Aspect ratio: 16:9 or 4:3

2. **Complete All Required Fields**
   - LocalBusiness: name, address, phone
   - Article: headline, image, publisher
   - FAQPage: minimum 3 questions

3. **Add Optional Fields**
   - Ratings/reviews
   - Opening hours
   - Price range
   - Social profiles

4. **Use Multiple Schemas**
   - Combine LocalBusiness + Service
   - Add FAQ to service pages
   - Include breadcrumbs everywhere

5. **Keep Dates Updated**
   - Article modification dates
   - Review dates
   - Event dates (if applicable)

## ⚠️ COMMON ERRORS TO AVOID

### **1. Missing Required Fields**
```javascript
// ❌ BAD
{
  "@type": "Article",
  "headline": "Title"
  // Missing: image, author, publisher, date
}

// ✅ GOOD
{
  "@type": "Article",
  "headline": "Title",
  "image": {...},
  "author": {...},
  "publisher": {...},
  "datePublished": "2025-01-01"
}
```

### **2. Invalid Date Format**
```javascript
// ❌ BAD
"datePublished": "January 1, 2025"

// ✅ GOOD
"datePublished": "2025-01-01T10:00:00Z"
```

### **3. Missing Logo Dimensions**
```javascript
// ❌ BAD
"logo": "https://example.com/logo.png"

// ✅ GOOD
"logo": {
  "@type": "ImageObject",
  "url": "https://example.com/logo.png",
  "width": 600,
  "height": 60
}
```

### **4. Duplicate IDs**
```javascript
// ❌ BAD - Same @id in multiple schemas
"@id": "#organization"

// ✅ GOOD - Unique IDs
"@id": "#localbusiness"
"@id": "#service"
"@id": "#article"
```

## 📈 MONITORING & MAINTENANCE

### **Weekly Checks:**
- [ ] Test new pages in Rich Results Test
- [ ] Check Search Console for errors
- [ ] Review enhancement reports

### **Monthly Reviews:**
- [ ] Update aggregate ratings
- [ ] Refresh modification dates on updated content
- [ ] Check for new schema opportunities

### **Quarterly Audits:**
- [ ] Validate all critical pages
- [ ] Update business information
- [ ] Add new schema types if available
- [ ] Review competitor schemas

## 🔍 TESTING WORKFLOW

### **Before Publishing:**
1. **Validate Schema**
   ```bash
   # Use Rich Results Test
   # Paste HTML or use URL
   # Fix all errors
   ```

2. **Check Mobile**
   ```
   # Ensure mobile-friendly
   # Test on actual devices
   ```

3. **Verify Image Loading**
   ```
   # Check all schema images load
   # Correct dimensions
   # Fast loading
   ```

### **After Publishing:**
1. **Request Indexing**
   ```
   # Google Search Console
   # Submit URL for indexing
   ```

2. **Monitor**
   ```
   # Check after 48-72 hours
   # Review in Search Console
   # Check live search results
   ```

## 📱 MOBILE-SPECIFIC CONSIDERATIONS

- Use responsive images in schemas
- Test on various screen sizes
- Ensure click-to-call works
- Verify maps integration

## 🎁 BONUS SCHEMAS (Future Implementation)

### **Review Schema**
```json
{
  "@type": "Review",
  "reviewRating": {
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "John Doe"
  }
}
```

### **Video Schema** (for tutorials)
```json
{
  "@type": "VideoObject",
  "name": "How to...",
  "description": "...",
  "thumbnailUrl": "...",
  "uploadDate": "..."
}
```

### **Event Schema** (for promotions)
```json
{
  "@type": "Event",
  "name": "...",
  "startDate": "...",
  "location": {...}
}
```

## 📚 RESOURCES

- **Schema.org Documentation:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Markup Validator:** https://validator.schema.org/

---

**Last Updated:** 2025-01-12
**Next Review:** 2025-02-12
