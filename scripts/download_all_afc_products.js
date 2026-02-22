const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const catalogPath = path.resolve(__dirname, '..', 'lib', 'catalog.ts');
const imagesDir = path.resolve(__dirname, '..', 'public', 'images', 'afc');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log(`Created images directory: ${imagesDir}`);
}

// AFC India category URLs
const afcCategoryUrls = [
    'https://www.afcindia.in/categories/workstations',
    'https://www.afcindia.in/categories/tables',
    'https://www.afcindia.in/categories/storage',
    'https://www.afcindia.in/categories/soft-seating',
    'https://www.afcindia.in/categories/seating',
    'https://www.afcindia.in/categories/educational'
];

// Download image from URL and save locally
async function downloadImage(imageUrl, localFilename) {
    try {
        const response = await axios({
            method: 'GET',
            url: imageUrl,
            responseType: 'stream',
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            timeout: 30000
        });
        
        const writer = fs.createWriteStream(localFilename);
        response.data.pipe(writer);
        
        return new Promise((resolve, reject) => {
            writer.on('finish', () => {
                console.log(`✓ Downloaded: ${path.basename(localFilename)}`);
                resolve(localFilename);
            });
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`✗ Failed to download ${imageUrl}:`, error.message);
        return null;
    }
}

// Get ALL product URLs from a category page
async function getAllProductUrlsFromCategory(categoryUrl) {
    try {
        console.log(`🔍 Finding all products in category: ${categoryUrl}`);
        const response = await axios.get(categoryUrl);
        const $ = cheerio.load(response.data);
        
        const productUrls = new Set();
        
        // Look for all product links
        $('a[href*="/products/"]').each((i, elem) => {
            const href = $(elem).attr('href');
            if (href && !href.includes('#') && !href.includes('categories')) {
                const fullUrl = href.startsWith('http') ? href : `https://www.afcindia.in${href}`;
                productUrls.add(fullUrl);
            }
        });
        
        // Also check for product cards and other elements
        $('[href*="/products/"], [data-product-url]').each((i, elem) => {
            const href = $(elem).attr('href') || $(elem).attr('data-product-url');
            if (href && href.includes('/products/')) {
                const fullUrl = href.startsWith('http') ? href : `https://www.afcindia.in${href}`;
                productUrls.add(fullUrl);
            }
        });
        
        console.log(`📦 Found ${productUrls.size} products in this category`);
        return Array.from(productUrls);
        
    } catch (error) {
        console.error(`Error fetching category ${categoryUrl}:`, error.message);
        return [];
    }
}

// Extract product images with comprehensive detection
async function extractProductImages($, productUrl) {
    const images = [];
    
    // Comprehensive selectors for product images
    const selectors = [
        'img[src*="product"]',
        'img[src*="chair"]',
        'img[src*="table"]',
        'img[src*="desk"]',
        'img[src*="storage"]',
        'img[src*="furniture"]',
        'img[alt*="product"]',
        'img[alt*="chair"]',
        'img[alt*="table"]',
        'img[alt*="desk"]',
        'img[alt*="furniture"]',
        '.gallery img',
        '.product-gallery img',
        '.image-gallery img',
        '.swiper-slide img',
        '.carousel-item img',
        '.main-image',
        '.product-image',
        '[data-image]',
        'picture source',
        'source[srcset*="product"]'
    ];
    
    for (const selector of selectors) {
        $(selector).each((i, elem) => {
            let src = $(elem).attr('src') || $(elem).attr('srcset') || $(elem).attr('data-src');
            if (src) {
                // Handle srcset (take first URL)
                if (src.includes(',')) {
                    src = src.split(',')[0].split(' ')[0];
                }
                
                if (src && !src.includes('logo') && !src.includes('icon') && 
                    !src.includes('avatar') && !src.includes('placeholder')) {
                    const fullUrl = src.startsWith('http') ? src : `https://www.afcindia.in${src}`;
                    if (!images.includes(fullUrl) && images.length < 10) {
                        images.push(fullUrl);
                    }
                }
            }
        });
    }
    
    return images.slice(0, 10); // Return max 10 images
}

// Process a single product - download images and return local paths
async function processProduct(productUrl, categoryName) {
    try {
        console.log(`\n🔄 Processing: ${productUrl}`);
        const response = await axios.get(productUrl, { timeout: 15000 });
        const $ = cheerio.load(response.data);
        
        // Extract product information
        const productName = $('h1').text().trim() || 
                           $('title').text().split('|')[0].trim() ||
                           productUrl.split('/').pop().replace(/[-]/g, ' ');
        
        const productId = productUrl.split('/').pop().toLowerCase().replace(/[^a-z0-9]/g, '-');
        
        // Extract description
        const description = $('meta[name="description"]').attr('content') || 
                           $('p').first().text().trim() ||
                           `Premium ${productName} from AFC India`;
        
        // Extract images
        const imageUrls = await extractProductImages($, productUrl);
        
        // Create product-specific directory
        const productDir = path.join(imagesDir, productId);
        if (!fs.existsSync(productDir)) {
            fs.mkdirSync(productDir, { recursive: true });
        }
        
        // Download images
        const localImagePaths = [];
        for (let i = 0; i < imageUrls.length; i++) {
            const imageUrl = imageUrls[i];
            const extension = path.extname(imageUrl) || '.webp';
            const filename = `${i + 1}${extension}`;
            const localPath = path.join(productDir, filename);
            
            const downloadedPath = await downloadImage(imageUrl, localPath);
            if (downloadedPath) {
                // Convert to web path for catalog
                const webPath = `/images/afc/${productId}/${filename}`;
                localImagePaths.push(webPath);
            }
            
            // Add delay between downloads
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        // If no images downloaded, use placeholder
        if (localImagePaths.length === 0) {
            localImagePaths.push('/images/afc/placeholder.webp');
            console.log(`⚠️  Using placeholder for ${productName}`);
        }
        
        // Return complete product data
        return {
            id: productId,
            name: productName,
            description: description.substring(0, 250),
            flagshipImage: localImagePaths[0],
            sceneImages: localImagePaths.slice(1, 4),
            variants: [{
                id: 'standard',
                variantName: 'Standard Model',
                galleryImages: localImagePaths.slice(0, 7)
            }],
            detailedInfo: {
                overview: description,
                features: ['Premium quality', 'Ergonomic design', 'Durable construction'],
                dimensions: 'Customizable dimensions',
                materials: ['High-quality materials']
            },
            metadata: {
                source: 'afcindia.in',
                category: categoryName,
                bifmaCertified: true,
                warrantyYears: 5
            }
        };
        
    } catch (error) {
        console.error(`❌ Error processing ${productUrl}:`, error.message);
        return null;
    }
}

// Main function to get ALL products
async function getAllAfcProducts() {
    console.log('🚀 Starting comprehensive AFC product collection...');
    
    const allProducts = [];
    
    for (const categoryUrl of afcCategoryUrls) {
        const categoryName = categoryUrl.split('/').pop();
        console.log(`\n📂 Processing category: ${categoryName}`);
        
        // Get ALL product URLs from this category
        const productUrls = await getAllProductUrlsFromCategory(categoryUrl);
        
        if (productUrls.length === 0) {
            console.log(`⚠️  No products found in ${categoryName}`);
            continue;
        }
        
        console.log(`📊 Processing ${productUrls.length} products in ${categoryName}...`);
        
        // Process each product in this category
        for (let i = 0; i < productUrls.length; i++) {
            const productUrl = productUrls[i];
            const productData = await processProduct(productUrl, categoryName);
            
            if (productData) {
                allProducts.push(productData);
                console.log(`✅ [${i + 1}/${productUrls.length}] Added: ${productData.name}`);
            }
            
            // Add delay between products
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Add delay between categories
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    return allProducts;
}

// Update catalog with all products
function updateCatalogWithAllProducts(products) {
    if (products.length === 0) {
        console.log('❌ No products to update in catalog');
        return;
    }
    
    try {
        let catalogContent = fs.readFileSync(catalogPath, 'utf-8');
        
        // Group products by category
        const productsByCategory = {};
        products.forEach(product => {
            const category = product.metadata?.category || 'furniture';
            if (!productsByCategory[category]) {
                productsByCategory[category] = [];
            }
            productsByCategory[category].push(product);
        });
        
        // Create AFC categories
        const afcCategories = [];
        
        for (const [categoryName, categoryProducts] of Object.entries(productsByCategory)) {
            const formattedName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
            
            afcCategories.push({
                id: `afc-${categoryName}`,
                name: `AFC ${formattedName}`,
                description: `Premium ${categoryName} solutions from AFC India`,
                series: [{
                    id: `afc-${categoryName}-series`,
                    name: `AFC ${formattedName} Series`,
                    description: `High-quality ${categoryName} for modern workspaces`,
                    products: categoryProducts
                }]
            });
        }
        
        // Convert to TypeScript format
        const afcCatalogString = JSON.stringify(afcCategories, null, 2)
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/"([^"]+)"/g, '"$1"');
        
        // Update catalog - replace entire afcCatalog array
        if (catalogContent.includes('export const afcCatalog: Category[] = [')) {
            const newCatalogContent = catalogContent.replace(
                /export const afcCatalog: Category\[\] = \[([\s\S]*?)\];/,
                `export const afcCatalog: Category[] = [
    ${afcCatalogString.substring(1, afcCatalogString.length - 1)}
];`
            );
            
            fs.writeFileSync(catalogPath, newCatalogContent, 'utf-8');
            console.log(`\n🎉 SUCCESS! Updated catalog with ${products.length} AFC products!`);
            console.log(`📊 Categories created: ${afcCategories.length}`);
            console.log(`📁 Local images stored in: ${imagesDir}`);
            
        } else {
            console.log('❌ Could not find afcCatalog export in catalog.ts');
        }
        
    } catch (error) {
        console.error('❌ Error updating catalog:', error);
    }
}

// Main execution
async function main() {
    try {
        console.log('='.repeat(60));
        console.log('🛋️  AFC INDIA PRODUCT CATALOG CREATOR');
        console.log('='.repeat(60));
        
        const allProducts = await getAllAfcProducts();
        
        if (allProducts.length > 0) {
            updateCatalogWithAllProducts(allProducts);
        } else {
            console.log('❌ No products were processed successfully');
        }
        
    } catch (error) {
        console.error('❌ Fatal error in main process:', error);
    }
}

// Run the comprehensive script
main().catch(console.error);