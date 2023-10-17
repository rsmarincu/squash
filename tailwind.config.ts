import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'player': "url('/public/player.png')",
      },
      colors: {
        'squash-red':'#B10511',
        'squash-dark':'#1E1E1E',
        'squash-light': '#929292'
      },
      rotate: {
        '15':'15deg'
      }
    },
  },
  plugins: [],
}
export default config
