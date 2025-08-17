const { fetchHTML } = require('../utils/request');
const cheerio = require('cheerio');

async function trends() {
  const url = `https://trends.google.com/trends/trendingsearches/daily?geo=US`;
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);
  const results = [];

  $('div.details-top').each((i, el) => {
    const title = $(el).find('a').text();
    if(title) results.push({ title });
  });

  return results;
}

module.exports = trends;
