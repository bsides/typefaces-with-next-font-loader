const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')
module.exports = withFonts(
  withCSS({
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })

      return config
    }
  })
)
