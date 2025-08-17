const { fetchHTML } = require('../utils/request');
const { parseImageResults } = require('../utils/parser');

async function images(query) {
  const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
  const html = await fetchHTML(url);
  return parseImageResults(html);
}

module.exports = images;
