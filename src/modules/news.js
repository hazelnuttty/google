const { fetchHTML } = require('../utils/request');
const cheerio = require('cheerio');

async function news(query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=nws`;
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);
  const results = [];

  $('div.dbsr').each((i, el) => {
    const title = $(el).find('div.JheGif.nDgy9d').text();
    const link = $(el).find('a').attr('href');
    const snippet = $(el).find('div.Y3v8qd').text();
    if(title && link) results.push({ title, link, snippet });
  });

  return results;
}

module.exports = news;
