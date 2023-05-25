/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,ts}",
  ],
  theme: { 
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      fontSize: {
        sm: ['12px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        displayLarge: ['3.563rem', '4rem'],
        displayMedium: ['2.813rem', '3.25rem'],
        displaySmall: ['2.25rem', '2.75rem'],
        headlineLarge: ['2rem', '2.5rem'],
        headlingMedium: ['1.75rem', '2.25rem'],
        headlingSmall: ['1.5rem', '2rem'],
        titleLarge: ['1.375rem', '1.75rem'],
        titleMedium: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.009rem' }],
        titleSmall: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.006rem' }],
      },
      colors: {
        'idr-core-blue': {
          50: '#e7eaf1',
          100: '#cfd5e3',
          200: '#b4bdd3',
          300: '#9faac7',
          400: '#8695b8',
          500: '#6e80aa',
          600: '#566b9c',
          700: '#3e558e',
          800: '#264080',
          900: '#0e2b72',
        },
        'idr-core-grey': {
          50: '#ecf1f4',
          100: '#d9e3e8',
          200: '#c6d5dd',
          300: '#b2c7d1 ',
          400: '#99afbd',
          500: '#849faf',
          600: '#708fa2',
          700: '#5b7f95 ',
          800: '#477088',
          900: '#32607a',
        },
        'idr-dark-blue': '#184095',
        'idr-light-blue': '#15bff0',
        'idr-purple': '#9C3587',
        'idr-orange': '#f99f38',
        'idr-gold': '#eebc00',
        'idr-dark-green': '#004225',
        'idr-light-green': '#7bcb36',
        'idr-success': '#00bb68',
        'idr-warning': '#f1c82e',
        'idr-error': '#da3016',
        'idr-button': '#184095',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}