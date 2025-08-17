# Hazel Google Node.js Library

Greetings, developers. We are proud to introduce our Node.js library fully integrated with Google services. This library utilizes web scraping to streamline and simplify data retrieval. We are committed to continuous development with the goal of making this library widely adopted and reliable.  

---

## Features

| Feature | Description |
|---------|-------------|
| **googleSearch** | Retrieve results from Google Search for any query. |
| **googleImages** | Search for images on Google and obtain URLs, titles, and metadata. |
| **googleNews** | Fetch the latest news articles from Google News based on keywords. |
| **googleScholar** | Search academic papers and scholarly articles via Google Scholar. |
| **googleMaps** | Geocoding service: obtain coordinates, addresses, and location details. |
| **googleTrends** | Access daily or real-time trending topics from Google Trends. |
| **googleVideos** | Search YouTube videos and retrieve metadata such as title, channel, and link. |
| **googleBooks** | Search Google Books and retrieve author, title, and description. |
| **googleShopping** | Search products on Google Shopping with price and link information. |
| **googleFinance** | Access stock quotes, market trends, and financial data. |
| **googleTranslate** | Translate text between languages using Google Translate. |
| **googleAutocomplete** | Obtain autocomplete suggestions from Google Search. |

---

## Example Usage

```javascript
const hazelGoogle = require('@hazel/google');

(async () => {
    try {
        const search = await hazelGoogle.googleSearch('OpenAI GPT-4');
        console.log('Search:', search);

        const images = await hazelGoogle.googleImages('OpenAI Logo');
        console.log('Images:', images);

        const translate = await hazelGoogle.googleTranslate('Hello world', 'en', 'id');
        console.log('Translate:', translate);
    } catch (err) {
        console.error(err);
    }
})();
```
## Installation
```
   bash
npm install @hazel/google
```
Or using Yarn:
```
   bash
yarn add @hazel/google
```

---

## Information
> This library can be used without any API key. All features are completely free of charge.

---

## Developers and Team
- Developer: Hazel
- Team : Finix 

---

## Thanks To
- All the teams who contributed during development  
- MFK Forum for technical tips and discussions  
- Web Academy Forum for sharing knowledge and solutions  
- OpenAI for AI tools and inspiration  
- Stack Overflow for support and programming solutions
---

## License
This project is licensed under the Apache-2.0 License.

"license": "Apache-2.0 License.",
