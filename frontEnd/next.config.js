const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'Sensation Blog',
        API_DEVELOPMENT: 'http://localhost:8000/api',
	API_PRODUCTION: 'http://www.sensation-blog.tk/api',
        PRODUCTION: true,
	DOMAIN_DEVELOPMENT: 'https://localhost:3000',
	DOMAIN_PRODUCTION: 'http://www.sensation-blog.tk',
        FB_APP_ID: '2456435663434',
        //DISQUS_SHORTNAME = 'sensation-blog'
    }
})
