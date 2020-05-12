const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'Sensation Blog',
        API_DEVELOPMENT: 'http://localhost:8000/api',
	    API_PRODUCTION: 'https://sensation-blog.tk/api',
        PRODUCTION: false,
	    DOMAIN_DEVELOPMENT: 'https://localhost:3000',
	    DOMAIN_PRODUCTION: 'https://sensation-blog.tech',
        FB_APP_ID: '2456435663434',
        DISQUS_SHORTNAME = 'sensation-blog'
    }
})
