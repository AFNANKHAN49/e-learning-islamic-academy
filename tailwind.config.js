/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'custom': '10px',
      },
      height: {
        'big': '30px',
        'med': '20px',
        'small': '15px'
      },
      width: {
        'big': '30px',
        'med': '20px',
        'small': '15px'
      },
      lineHeight:{
        'big': '2.5',
      }
    },
  },
  plugins: [],
}
