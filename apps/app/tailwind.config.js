const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '65px',
        lg: '200px',
      },
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#9c5bff',
        'text-bg-1': '#1f1e20',
        'text-bg-2': '#ffffff',
        'text-bg-3': '#9c5bff',
        'text-bg-4': '#ffab40',
        'accent-1': '#c435cc',
        'accent-2': '#977499',
        'accent-3': '#ffffff',
        'accent-4': '#ffffff',
        'accent-5': '#ffffff',
        'accent-6': '#ffffff',
        link: '#ffffff',        
        // primary: '#ffffff',
        // secondary: '#311445',
        // 'text-bg-1': '#f8005c',
        // 'text-bg-2': '#ffffff',
        // 'text-bg-3': '#ff7063',
        // 'text-bg-4': '#311445',
        // 'accent-1': '#f8005c',
        // 'accent-2': '#ffffff',
        // 'accent-3': '#ff7063',
        // 'accent-4': '#311445',
        // 'accent-5': '#f8005c',
        // 'accent-6': '#ffffff',
        // link: '#ffffff',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
