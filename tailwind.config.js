module.exports = {
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: process.env.NODE_ENV === 'production',
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        current: '#2F2E41',
        highlight: {
          DEFAULT: '#F50000',
          500: '#EC0154',
        },
        primary: {
          DEFAULT: '#F9A826',
          500: '#EC9D1F',
        },
        'primary-light': {
          DEFAULT: '#F8DCAF',
          500: '#F3D7A9',
        },
        secondary: {
          DEFAULT: '#00BFA6',
          500: '#02A690',
        },
      },
      fontSize: {
        // Or with a default line-height as well
        '5xl': [
          '48px',
          {
            letterSpacing: '-2px',
            lineHeight: '44px',
          },
        ],
      },
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
