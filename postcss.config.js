module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({  // <--- LLAMAR la función directamente
      content: [
        './**/*.html',
        './assets/js/**/*.js'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: ['collapse', 'collapsing', 'show', 'carousel', 'carousel-item', 'active', 'slide'],
        deep: [],
        greedy: []
      }
    })
  ]
}
