const { getHTML } = require('../utils/request');
const { parseBooks } = require('../utils/parser');

async function googleBooks(query) {
    const html = await getHTML(`https://www.google.com/search?tbm=bks&q=${encodeURIComponent(query)}`);
    return parseBooks(html);
}

module.exports = { googleBooks };
