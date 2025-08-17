const axios = require('axios');
const cheerio = require('cheerio');

let proxies = [];
let index = 0;

async function fetchProxies() {
  const { data } = await axios.get('https://free-proxy-list.net/');
  const $ = cheerio.load(data);
  proxies = [];

  $('#proxylisttable tbody tr').each((i, el) => {
    const tds = $(el).find('td');
    const host = $(tds[0]).text();
    const port = parseInt($(tds[1]).text());
    const https = $(tds[6]).text() === 'yes';
    if(https) proxies.push({ host, port });
  });
}

function getProxy() {
  if(proxies.length === 0) return null;
  const proxy = proxies[index];
  index = (index + 1) % proxies.length;
  return proxy;
}

module.exports = { getProxy, fetchProxies };
