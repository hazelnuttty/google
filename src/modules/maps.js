const { fetchHTML } = require('../utils/request');
const cheerio = require('cheerio');

async function maps(query) {
  const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);
  const results = [];

  $('a').each((i, el) => {
    const link = $(el).attr('href');
    if(link && link.includes('/place/')) results.push({ link });
  });

  return results;
}

module.exports = maps;
