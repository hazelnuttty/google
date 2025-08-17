const { getHTML } = require('../utils/request');
const { parseTranslate } = require('../utils/parser');

async function googleTranslate(text, from='auto', to='en') {
    const html = await getHTML(`https://translate.google.com/?sl=${from}&tl=${to}&text=${encodeURIComponent(text)}&op=translate`);
    return parseTranslate(html);
}

module.exports = { googleTranslate };
