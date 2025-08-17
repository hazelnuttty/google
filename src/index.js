const { googleSearch } = require('./modules/search');
const { googleImages } = require('./modules/images');
const { googleNews } = require('./modules/news');
const { googleScholar } = require('./modules/scholar');
const { googleMaps } = require('./modules/maps');
const { googleTrends } = require('./modules/trends');
const { googleVideos } = require('./modules/videos');
const { googleBooks } = require('./modules/books');
const { googleShopping } = require('./modules/shopping');
const { googleFinance } = require('./modules/finance');
const { googleTranslate } = require('./modules/translate');
const { googleAutocomplete } = require('./modules/autocomplete');

module.exports = {
    googleSearch,
    googleImages,
    googleNews,
    googleScholar,
    googleMaps,
    googleTrends,
    googleVideos,
    googleBooks,
    googleShopping,
    googleFinance,
    googleTranslate,
    googleAutocomplete
};
