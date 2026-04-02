const fs = require('fs');

// Read the template HTML
let html = fs.readFileSync('index.html', 'utf8');

// Replace placeholders with real keys from Netlify environment variables
html = html.replace('__POLYGON_KEY__', process.env.POLYGON_API_KEY || '');
html = html.replace('__FINNHUB_KEY__', process.env.FINNHUB_API_KEY || '');

// Write finished file to dist folder
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);

console.log('Keys injected successfully.');
