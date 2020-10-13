module.exports = {
  source: ['./tokens/**/*.json'],
  platforms: {
    web: {
      transformGroup: ['scss'],
      prefix: 'sprk',
      buildPath: 'dist/design-tokens/web/',
      files: [
        {
          format: 'themable-scss/web',
          destination: '_settings.scss',
          filter: {
            type: 'settings',
          },
        },
        {
          format: 'themable-scss/web',
          destination: '_colors.scss',
          filter: {
            type: 'colors',
          },
        },
        {
          format: 'json',
          destination: 'settings.json',
          filter: {
            type: 'settings',
          },
        },
        {
          format: 'json',
          destination: 'colors.json',
          filter: {
            type: 'colors',
          },
        },
      ],
    },
    js: {
      transformGroup: `js`,
      buildPath: `dist/design-tokens/web/`,
      files: [
        {
          destination: `settings.js`,
          format: `javascript/es6`,
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: 'dist/design-tokens/android/',
      files: [
        {
          destination: 'spark_colors.xml',
          format: 'android/colors',
        },
        {
          destination: 'spark_font_dimens.xml',
          format: 'android/fontDimens',
        },
        {
          destination: 'spark_dimens.xml',
          format: 'android/dimens',
        },
        {
          destination: 'spark_integers.xml',
          format: 'android/integers',
        },
        {
          destination: 'spark_strings.xml',
          format: 'android/strings',
        },
      ],
    },

    ios: {
      transformGroup: `ios-swift`,
      buildPath: `dist/design-tokens/ios/`,
      files: [
        {
          destination: `SparkDesignTokens.swift`,
          className: `SparkDesignTokens`,
          format: `ios-swift/class.swift`,
        },
      ],
    },
  },
};
