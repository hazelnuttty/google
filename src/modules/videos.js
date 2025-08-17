const { getHTML } = require('../utils/request');
const { parseVideos } = require('../utils/parser');

async function googleVideos(query) {
    const html = await getHTML(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
    return parseVideos(html);
}

module.exports = { googleVideos };
