const { getHTML } = require('../utils/request');
const { parseAutocomplete } = require('../utils/parser');

async function googleAutocomplete(query) {
    const html = await getHTML(`https://www.google.com/complete/search?q=${encodeURIComponent(query)}&client=firefox`);
    return parseAutocomplete(html);
}

module.exports = { googleAutocomplete };
