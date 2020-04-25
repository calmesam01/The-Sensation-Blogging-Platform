const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'Sensation Blog',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        PRODUCTION: false
    }
})