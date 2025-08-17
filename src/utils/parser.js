const cheerio = require('cheerio');

function parseSearchResults(html) {
  const $ = cheerio.load(html);
  const results = [];
  $('div.g').each((i, el) => {
    const title = $(el).find('h3').text();
    const link = $(el).find('a').attr('href');
    const snippet = $(el).find('.IsZvec').text();
    if(title && link) results.push({ title, link, snippet });
  });
  return results;
}

function parseImageResults(html) {
  const $ = cheerio.load(html);
  const results = [];
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if(src) results.push({ src });
  });
  return results;
}

module.exports = { parseSearchResults, parseImageResults };
