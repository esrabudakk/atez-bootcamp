const url = require('url');

const websiteUrl = 'https://www.atez.com.tr/?timezone=en&lang=en'

    const urlParams = url.parse(websiteUrl);
    console.log(urlParams);