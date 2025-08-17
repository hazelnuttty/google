const { getHTML } = require('../utils/request');
const { parseShopping } = require('../utils/parser');

async function googleShopping(query) {
    const html = await getHTML(`https://www.google.com/search?tbm=shop&q=${encodeURIComponent(query)}`);
    return parseShopping(html);
}

module.exports = { googleShopping };
