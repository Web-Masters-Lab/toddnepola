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
        primary: "#0A278D",
        secondary: "#D5D5D5"
      },
      backgroundImage:{
        hero: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/desktop-background.png")',
        desktop:'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/desktop-background.png")'
      },
      animation: {
				fade: 'fadeIn .5s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    },
  },
  plugins: [],
}
export default config
