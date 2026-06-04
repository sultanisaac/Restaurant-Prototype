const urls = {
  gudeg: 'https://images.unsplash.com/photo-1707529332935-bfa3925f15ac?auto=format&fit=crop&w=600&q=80',
  nasicampur: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&w=600&q=80'
};

async function verifyUrls() {
  for (const [key, url] of Object.entries(urls)) {
    try {
      const response = await fetch(url, { method: 'GET' });
      if (response.ok) {
        console.log(`[${key}] => OK (${response.status})`);
      } else {
        console.error(`[${key}] => FAILED: ${response.status}`);
      }
    } catch (err) {
      console.error(`[${key}] => ERROR:`, err.message);
    }
  }
}

verifyUrls();
