const { fetchHTML } = require('../utils/request');
const cheerio = require('cheerio');

async function scholar(query) {
  const url = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
  const html = await fetchHTML(url);
  const $ = cheerio.load(html);
  const results = [];

  $('.gs_ri').each((i, el) => {
    const title = $(el).find('.gs_rt a').text();
    const link = $(el).find('.gs_rt a').attr('href');
    const snippet = $(el).find('.gs_rs').text();
    if(title && link) results.push({ title, link, snippet });
  });

  return results;
}

module.exports = scholar;
