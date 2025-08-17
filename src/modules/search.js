const { fetchHTML } = require('../utils/request');
const { parseSearchResults } = require('../utils/parser');

async function search(query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&hl=en`;
  const html = await fetchHTML(url);
  return parseSearchResults(html);
}

module.exports = search;
