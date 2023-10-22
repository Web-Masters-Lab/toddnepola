import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoRegular: ['var(--font-roboto)'],
        roboto_condensedBold: ['var(--font-roboto-condensed)'],
        poppinsMedium: ['var(--font-poppins)'],
        copperPlate:['var(--font-copperplate)']
      },
      transitionDuration: {
        '400': '0.4s',
      },
        colors: {
          background: "#f7f7f7",
          primary: "#0037FF",
          secondary: "#D5D5D5"
        },
    },
  },
  plugins: [],
}
export default config
