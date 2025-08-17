const axios = require('axios');
const randomUseragent = require('random-useragent');
const { getProxy } = require('./proxy-rotator');

async function fetchHTML(url) {
  const proxy = getProxy();
  const response = await axios.get(url, {
    headers: {
      'User-Agent': randomUseragent.getRandom(),
      'Accept-Language': 'en-US,en;q=0.9'
    },
    proxy: proxy ? { host: proxy.host, port: proxy.port } : null,
    timeout: 15000
  });
  return response.data;
}

module.exports = { fetchHTML };
