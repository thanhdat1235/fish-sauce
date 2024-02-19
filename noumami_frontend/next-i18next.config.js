const path = require('path')
const { i18n } = require('next-i18next')

module.exports = {
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
}