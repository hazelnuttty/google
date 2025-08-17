const cheerio = require('cheerio');

function parseSearch(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('div.g').each((i, el) => {
        const title = $(el).find('h3').text();
        const link = $(el).find('a').attr('href');
        const snippet = $(el).find('.VwiC3b').text();

        if (title && link) {
            results.push({ title, link, snippet });
        }
    });

    return results;
}

function parseImages(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('img').each((i, el) => {
        const src = $(el).attr('src');
        const alt = $(el).attr('alt');
        if (src) results.push({ src, alt });
    });

    return results;
}

function parseNews(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('article').each((i, el) => {
        const title = $(el).find('h3').text();
        const link = $(el).find('a').attr('href');
        const snippet = $(el).find('span').text();

        if (title && link) results.push({ title, link, snippet });
    });

    return results;
}

function parseScholar(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('.gs_r').each((i, el) => {
        const title = $(el).find('.gs_rt').text();
        const link = $(el).find('.gs_rt a').attr('href');
        const snippet = $(el).find('.gs_rs').text();

        if (title && link) results.push({ title, link, snippet });
    });

    return results;
}

function parseMaps(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('div.section-result').each((i, el) => {
        const name = $(el).find('.section-result-title').text();
        const address = $(el).find('.section-result-location').text();
        const link = $(el).find('a').attr('href');

        if (name) results.push({ name, address, link });
    });

    return results;
}

function parseTrends(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('div.feed-item').each((i, el) => {
        const title = $(el).find('a.title').text();
        const link = $(el).find('a').attr('href');

        if (title && link) results.push({ title, link });
    });

    return results;
}

function parseVideos(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('a#video-title').each((i, el) => {
        const title = $(el).text().trim();
        const link = 'https://www.youtube.com' + $(el).attr('href');
        if (title && link) results.push({ title, link });
    });

    return results;
}

function parseBooks(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('div.bkSh').each((i, el) => {
        const title = $(el).find('h3').text();
        const link = $(el).find('a').attr('href');
        if (title && link) results.push({ title, link });
    });

    return results;
}

function parseShopping(html) {
    const $ = cheerio.load(html);
    const results = [];

    $('div.sh-dgr__grid-result').each((i, el) => {
        const title = $(el).find('h4').text();
        const price = $(el).find('.a8Pemb').text();
        const link = $(el).find('a').attr('href');
        if (title && link) results.push({ title, price, link });
    });

    return results;
}

function parseFinance(html) {
    const $ = cheerio.load(html);
    const results = {};

    results.symbol = $('div.DFlfde').attr('data-symbol');
    results.price = $('div.DFlfde').text();
    results.change = $('div.WlRRw').text();

    return results;
}

function parseTranslate(html) {
    const $ = cheerio.load(html);
    const result = $('span[jsname="W297wb"]').first().text();
    return result;
}

function parseAutocomplete(html) {
    const suggestions = JSON.parse(html)[1];
    return suggestions || [];
}

module.exports = {
    parseSearch,
    parseImages,
    parseNews,
    parseScholar,
    parseMaps,
    parseTrends,
    parseVideos,
    parseBooks,
    parseShopping,
    parseFinance,
    parseTranslate,
    parseAutocomplete
};
