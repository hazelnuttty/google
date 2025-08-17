@hazel/google is a comprehensive Node.js package that gives you access to a wide range of Google services without requiring any API key. It uses public endpoints and scraping techniques to fetch data from Google, including Search, Images, News, Scholar, Maps, Trends, Videos, Books, Shopping, Finance, Translate, and Autocomplete.

This package is perfect for developers who want to integrate Google data into their Node.js applications quickly and easily, without worrying about API keys, quotas, or authentication.


---

## Features

googleSearch → Fetch results from Google Search for any query.
googleImages → Search for images on Google and get URLs, titles, and metadata.
googleNews → Fetch the latest news articles from Google News based on keywords.
googleScholar → Search academic papers and articles using Google Scholar.
googleMaps → Geocoding service: get coordinates, addresses, and locations.
googleTrends → Get daily or real-time trending topics from Google Trends.
googleVideos → Search YouTube videos and get metadata like title, channel, and link.
googleBooks → Search books on Google Books and retrieve author, title, and description.
googleShopping → Search products from Google Shopping with price and link information.
googleFinance → Fetch stock quotes, market trends, and finance-related data.
googleTranslate → Translate text between languages using Google Translate.
googleAutocomplete → Get autocomplete suggestions from Google Search.


> ⚠️ Note: All features work without a Google API key, but heavy usage may be rate-limited by Google.




---

Installation

npm install @hazel/google

or

yarn add @hazel/google


---

Importing Modules

You can import the entire package or only the modules you need:

const google = require('@hazel/google');

const {
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
} = google;


---

Usage Examples

1. Google Search

const results = await googleSearch.query("Node.js tutorial");
console.log(results);
/*
[
  { title: "Node.js Tutorial - W3Schools", link: "...", snippet: "..." },
  { title: "Official Node.js Documentation", link: "...", snippet: "..." },
  ...
]
*/

2. Google Images

const images = await googleImages.query("cute puppies");
console.log(images);
/*
[
  { title: "Cute Puppy", link: "...", imageUrl: "..." },
  ...
]
*/

3. Google News

const news = await googleNews.query("technology");
console.log(news);
/*
[
  { title: "Latest Tech News", link: "...", source: "...", date: "..." },
  ...
]
*/

4. Google Scholar

const papers = await googleScholar.query("machine learning");
console.log(papers);
/*
[
  { title: "Machine Learning Basics", authors: "...", year: "...", link: "..." },
  ...
]
*/

5. Google Maps

const location = await googleMaps.geocode("Jakarta, Indonesia");
console.log(location);
/*
{ address: "Jakarta, Indonesia", lat: -6.2088, lng: 106.8456 }
*/

6. Google Trends

const trends = await googleTrends.daily();
console.log(trends);
/*
[
  { keyword: "ChatGPT", traffic: "high", region: "US" },
  ...
]
*/

7. Google Videos

const videos = await googleVideos.search("JavaScript tutorials");
console.log(videos);
/*
[
  { title: "JavaScript Crash Course", channel: "FreeCodeCamp", url: "..." },
  ...
]
*/

8. Google Books

const books = await googleBooks.search("Clean Code");
console.log(books);
/*
[
  { title: "Clean Code", author: "Robert C. Martin", link: "..." },
  ...
]
*/

9. Google Shopping

const products = await googleShopping.query("laptop");
console.log(products);
/*
[
  { title: "Dell XPS 13", price: "$999", link: "..." },
  ...
]
*/

10. Google Finance

const stock = await googleFinance.quote("AAPL");
console.log(stock);
/*
{ symbol: "AAPL", price: 175.24, change: "+1.23", currency: "USD" }
*/

11. Google Translate

const translated = await googleTranslate.translate("Hello world", "es");
console.log(translated); // "Hola mundo"

12. Google Autocomplete

const suggestions = await googleAutocomplete.query("node js");
console.log(suggestions);
/*
["node js tutorial", "node js download", "node js express", ...]
*/


---

Notes & Tips
1. No API keys required — everything uses public Google endpoints.
2. Node.js 14+ recommended for async/await.
3. Modules are modular: import only what you need to save memory.
4. Google may rate-limit requests if too many are made quickly. Consider adding delays or caching results.
5. Ideal for scraping, automation scripts, dashboards, and educational projects.
