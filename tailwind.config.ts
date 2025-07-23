import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/globals.css',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        global: {
          background1: 'var(--global-bg-1)',
          background2: 'var(--global-bg-2)',
          text1: 'var(--global-text-1)',
          text2: 'var(--global-text-2)',
          text3: 'var(--global-text-3)'
        },
        header: {
          text1: 'var(--header-text-1)'
        },
        button: {
          background1: 'var(--button-bg-1)',
          text1: 'var(--button-text-1)'
        }
      },
      fontFamily: {
        'product-sans': ['Product Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
