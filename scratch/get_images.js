const fs = require('fs');
const path = require('path');

const queries = {
  rendang: 'beef rendang indonesian',
  nasigoreng: 'nasi goreng fried rice',
  sate: 'chicken satay skewers',
  soto: 'soto ayam soup',
  bakso: 'indonesian meatball soup bakso',
  gadogado: 'gado gado salad',
  ayampenyet: 'indonesian fried chicken sambal',
  rawon: 'rawon beef soup',
  nasicampur: 'nasi campur indonesian',
  gudeg: 'gudeg jogja jackfruit',
  esteh_menu: 'iced sweet tea',
  esjeruk_menu: 'orange juice ice',
  kerupuk_menu: 'shrimp crackers kerupuk'
};

async function fetchImages() {
  const results = {};
  for (const [key, query] of Object.entries(queries)) {
    try {
      const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`;
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (!response.ok) {
        console.error(`Failed to fetch for ${key}: ${response.statusText}`);
        continue;
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        // Find the first image
        const img = data.results[0];
        results[key] = {
          id: img.id,
          description: img.description || img.alt_description,
          url: img.urls.regular
        };
        console.log(`[${key}] => Found image ID: ${img.id} (${results[key].description})`);
      } else {
        console.log(`[${key}] => No results found`);
      }
    } catch (err) {
      console.error(`Error fetching ${key}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'images_output.json'), JSON.stringify(results, null, 2));
  console.log('Saved to images_output.json');
}

fetchImages();
