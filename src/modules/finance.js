const { getHTML } = require('../utils/request');
const { parseFinance } = require('../utils/parser');

async function googleFinance(query) {
    const html = await getHTML(`https://www.google.com/finance/quote/${encodeURIComponent(query)}`);
    return parseFinance(html);
}

module.exports = { googleFinance };
