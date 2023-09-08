import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'blankImage': "url('./public/blank-image.png')",
      },
      colors: {
        'primary-blue': '#06038D',
        'secondary-blue': '#61D9DE',
        'black': '#000000',
        'white': '#ffffff',

        'custom-gray-200': '#EFEFF6',
        'custom-gray-300': '#E6E5F0',
        'custom-gray-400': '#E1E4F2'
      }
    },
  },
  plugins: [],
}
export default config
